class Solution {
  shortestPath(n, edges, src) {
    // Build adjacency list
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
      adj[u].push([v, w]);
    }

    // Distances — Infinity for all, 0 for src
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    // Min-heap: [distance, node]
    // JS has no built-in min-heap, so we use a simple sorted array sim
    const minHeap = [[0, src]];

    while (minHeap.length > 0) {
      // Pop the min-distance entry
      minHeap.sort((a, b) => a[0] - b[0]);
      const [d, u] = minHeap.shift();

      // Skip if we already found a shorter path
      if (d > dist[u]) continue;

      for (const [v, w] of adj[u]) {
        const newDist = dist[u] + w;
        if (newDist < dist[v]) {
          dist[v] = newDist;
          minHeap.push([newDist, v]);
        }
      }
    }

    // Build result: unreachable nodes get -1
    const result = {};
    for (let i = 0; i < n; i++) {
      result[i] = dist[i] === Infinity ? -1 : dist[i];
    }
    return result;
  }
}

// --- Test Runner ---
function run(operations, values) {
  let sol;
  const results = [];
  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const args = values[i];
    if (op === "Solution") {
      sol = new Solution();
      results.push(null);
    } else if (op === "shortestPath") {
      const [n, edges, src] = args;
      results.push(sol.shortestPath(n, edges, src));
    }
  }
  return results;
}

// --- Test Cases ---
const tests = [
  {
    ops: ["Solution", "shortestPath"],
    vals: [[], [5, [[0,1,10],[0,2,3],[1,3,2],[2,1,4],[2,3,8],[2,4,2],[3,4,5]], 0]],
    expected: [null, {0:0, 1:7, 2:3, 3:9, 4:5}]
  },
  {
    ops: ["Solution", "shortestPath"],
    vals: [[], [3, [[0,1,1],[1,2,1]], 0]],
    expected: [null, {0:0, 1:1, 2:2}]
  },
  {
    ops: ["Solution", "shortestPath"],
    vals: [[], [3, [[0,1,5]], 0]],
    expected: [null, {0:0, 1:5, 2:-1}]  // vertex 2 unreachable
  },
  {
    ops: ["Solution", "shortestPath"],
    vals: [[], [2, [[0,1,3],[1,0,1]], 1]],
    expected: [null, {0:1, 1:0}]         // src is vertex 1
  }
];

let passed = 0;
for (let t = 0; t < tests.length; t++) {
  const { ops, vals, expected } = tests[t];
  const results = run(ops, vals);
  let ok = true;
  for (let i = 0; i < results.length; i++) {
    if (expected[i] === null) continue;
    const r = JSON.stringify(results[i]);
    const e = JSON.stringify(expected[i]);
    if (r !== e) { ok = false; console.log(`Test ${t+1} op[${i}] FAIL: got ${r}, expected ${e}`); }
  }
  if (ok) { console.log(`Test ${t+1} PASSED`); passed++; }
}

console.log(`\n${passed}/${tests.length} tests passed`);