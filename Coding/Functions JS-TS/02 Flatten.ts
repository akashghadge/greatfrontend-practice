type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
    let res: Array<any> = [];
    for (let i: number = 0; i < value.length; i++) {
        if (Array.isArray(value[i])) {
            res.push(...flatten(value[i]));
        }
        else {
            res.push(value[i]);
        }
    }
    return res;
}
