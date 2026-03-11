/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if (pairs.length === 0)
        return [];

        const arr = [...pairs];
        const states = [];

        for (let i = 0; i < arr.length; i++) {
            let j = i;
            while (j > 0 && arr[j - 1].key > arr[j].key) {
                [arr[j-1], arr[j]] = [arr[j], arr[j - 1]];
                j--;
            }
            states.push(arr.map(p => ({ ...p })));
        }
        return states;
    }
}

const solution = new Solution();

const pairs = [
  { key: 5, value: "apple" },
  { key: 2, value: "banana" },
  { key: 9, value: "cherry" }
];

console.log(solution.insertionSort(pairs));