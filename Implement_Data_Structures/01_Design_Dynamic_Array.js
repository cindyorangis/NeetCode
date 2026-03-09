class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.data = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.data[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.data[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.data[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const val = this.data[this.size - 1];
        this.size--;
        return val;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const newData = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}

// Test cases
function runTest(ops) {
    let arr = null;
    const output = [];
    let i = 0;

    while (i < ops.length) {
        const op = ops[i];

        if (op === "Array") {
            arr = new DynamicArray(ops[++i]);
            output.push(null);
        } else if (op === "getSize") {
            output.push(arr.getSize());
        } else if (op === "getCapacity") {
            output.push(arr.getCapacity());
        } else if (op === "pushback") {
            arr.pushback(ops[++i]);
            output.push(null);
        } else if (op === "popback") {
            output.push(arr.popback());
        } else if (op === "get") {
            output.push(arr.get(ops[++i]));
        } else if (op === "set") {
            const idx = ops[++i];
            const val = ops[++i];
            arr.set(idx, val);
            output.push(null);
        }

        i++;
    }

    return output;
}

// Examples
const example1 = ["Array", 1, "getSize", "getCapacity"];
const example2 = ["Array", 1, "pushback", 1, "getCapacity", "pushback", 2, "getCapacity"];
const example3 = ["Array", 1, "getSize", "getCapacity", "pushback", 1, "getSize", "getCapacity", "pushback", 2, "getSize", "getCapacity", "get", 1, "set", 1, 3, "get", 1, "popback", "getSize", "getCapacity"];

console.log(runTest(example1));
console.log(runTest(example2));
console.log(runTest(example3));