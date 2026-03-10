class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head;
        let idx = 0;
        while (curr) {
            if (idx === index) return curr.val;
            curr = curr.next;
            idx++;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next) curr = curr.next;
        curr.next = node;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (!this.head) return false;
        if (index === 0) {
            this.head = this.head.next;
            return true;
        }
        let curr = this.head;
        for (let idx = 0; idx < index - 1; idx++) {
            if (!curr.next) return false;
            curr = curr.next;
        }
        if (!curr.next) return false;
        curr.next = curr.next.next;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const result = [];
        let curr = this.head;
        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }
        return result;
    }
}

// Test cases
function runTest(ops) {
    const list = new LinkedList();
    const results = [];
    let i = 0;

    while (i < ops.length) {
        const cmd = ops[i];
        if (cmd === "getValues") {
        results.push(list.getValues());
        i++;
        } else {
        const val = ops[i + 1];
        if (cmd === "insertHead") { list.insertHead(val); results.push(null); }
        else if (cmd === "insertTail") { list.insertTail(val); results.push(null); }
        else if (cmd === "get") { results.push(list.get(val)); }
        else if (cmd === "remove") { results.push(list.remove(val)); }
        i += 2;
        }
    }
    return results;
}

// Examples
const example1 = ["insertHead", 1, "insertTail", 2, "insertHead", 0, "remove", 1, "getValues"];
const example2 = ["insertHead", 1, "insertHead", 2, "get", 5];

console.log(runTest(example1));
console.log(runTest(example2));