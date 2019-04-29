// @ts-check
const path = require("path");
const assert = require('assert');
const fs = require('fs');
// @ts-ignore
const config = require('../dist/config');
const { BinarySerialize, BinaryDeserialize } = config;
for (let key in config) {

    const clz = config[key];
    const filename = clz.filename;
    if (filename) {
        const json = require('../config/' + filename + ".json");
        /** arrays @type { buffer: Uint8Array, id: number }[] */
        const arrays = [];
        for (let key in json) {
            const id = parseInt(key);
            const item = json[key];

            const obj = new clz();
            for (let itemKey in item) {
                obj[itemKey] = item[itemKey];
            }

            const arraybuffer = BinarySerialize(obj, clz);
            const newObj = BinaryDeserialize(clz, arraybuffer);
            assert(item, newObj);
            const buffer = new Uint8Array(arraybuffer);
            arrays.push({ buffer, id });
            mergeArrayBuffer(arrays, filename)

        }
    }
}

/**
 * 
 * @param {{ buffer: Uint8Array, id: number }[]} arrays 
 * @param {string} filename 
 */
function mergeArrayBuffer(arrays, filename) {
    let totalSize = 0;
    const header = [];
    for (let array of arrays) {
        totalSize += array.buffer.byteLength;
        header.push(array.id);
        header.push(array.buffer.length)
    }


    const totalArrayBuffer = new ArrayBuffer(totalSize + header.length * 4 + 4);
    const totalArrayBufferView = new Uint8Array(totalArrayBuffer, header.length * 4 + 4);
    const headerArrayBufferView = new Uint32Array(totalArrayBuffer, 0, header.length + 1)
    const headerArray = new Uint32Array(header);
    headerArrayBufferView[0] = arrays.length;
    headerArrayBufferView.set(headerArray, 1)
    let index = 0;
    for (let uint8array of arrays) {
        totalArrayBufferView.set(uint8array.buffer, index);
        index += uint8array.buffer.byteLength;
    }
    fs.writeFileSync(filename + ".bin", new Buffer(totalArrayBuffer));

    let names = filename.split("/");
    let name = names.pop();
    name = name.replace(".", "_");
    // let totalBuffer = new Uint8Array(totalArrayBuffer);
    // fileContent.push({ buffer: totalBuffer, name: name })
    return totalArrayBuffer;
}