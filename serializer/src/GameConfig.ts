import { BinaryDeserialize } from "@egret/ts-binary-serializer";


const $collectionMapping: { [name: string]: GameConfigCollection<any> } = {};;

export function setConfig<T>(clz: { new(): T }, arraybuffer: ArrayBuffer) {
    const gameCollection = new GameConfigCollection(clz);
    gameCollection.setConfig(arraybuffer);
    $collectionMapping[clz['name']] = gameCollection;
}

export function getConfig<T>(clz: { new(): T }, id: number, throwErr: boolean = true): T {
    let gameCollection = $collectionMapping[clz['name']];
    return gameCollection.getConfig(id, throwErr);
}

export function getAllConfig<T>(clz: { new(): T }): T[] {
    const gameCollection = $collectionMapping[clz['name']];
    return gameCollection.getAllConfig();
}
function readHeader(arraybuffer: ArrayBuffer) {

    const header = new Uint32Array(arraybuffer, 0, 1);
    const itemCount: number = header[0];
    const HEADER_ITEM_LENGTH = 2;
    const itemHeader = new Uint32Array(arraybuffer, 0, itemCount * HEADER_ITEM_LENGTH + 1);
    const obj: { [id: string]: { from: number, to: number } } = {};
    let index = itemHeader.byteLength;
    for (let i = 1; i < itemCount * HEADER_ITEM_LENGTH; i = i + HEADER_ITEM_LENGTH) {
        const from = index;
        const id = itemHeader[i];
        const itemLength = itemHeader[i + 1];
        const to = from + itemLength;
        index = to;
        obj[id] = { from, to };
    }
    return obj;
}

class GameConfigCollection<T> {
    private configs: { [id: number]: T } = {};

    private arraybuffer: ArrayBuffer;
    private header: { [id: string]: { from: number, to: number } };

    constructor(private clz: { new(): T }) {

    }

    public setConfig(arraybuffer: ArrayBuffer) {
        this.arraybuffer = arraybuffer;
    }
    public getConfig(id: number | string, throwErr: boolean) {
        if (typeof id === "string") {
            id = parseInt(id, 10);
        }
        if (this.configs[id]) {
            return this.configs[id];
        } else {
            const result = getConfigFromArrayBuffer(this.arraybuffer, this.clz, id, this.header, throwErr);
            this.configs[id] = result;
            return result;
        }

    }

    public getAllConfig(throwErr: boolean = true): T[] {
        this.header = readHeader(this.arraybuffer);
        const array: T[] = [];
        for (const key in this.header) {
            const obj = this.getConfig(key, throwErr);
            array.push(obj);
        }
        return array;
    }
}

function getConfigFromArrayBuffer<T>(
    arraybuffer: ArrayBuffer,
    clzz: new () => T,
    id: number,
    header?: { [id: string]: { from: number, to: number } },
    throwErr: boolean = true
): T {
    const headerObj = header || readHeader(arraybuffer);
    if (headerObj === undefined || headerObj[id] === undefined) {
        if (throwErr) {
            throw new Error(`missing ${id}$ in class:${clzz}`);
        } else {
            console.warn(`missing ${id}$ in class:${clzz}`);
            return null;
        }
    }
    const { from, to } = headerObj[id];
    const buffer = arraybuffer.slice(from, to); // mem alloc
    const obj = BinaryDeserialize(clzz, buffer);
    return obj;
}