export const filename = (filename: string) => (target: any) => {
    target.filename = filename;
}