class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(priority, key) {
    this.nodes.push({ key, priority });
    this.sort();
  }

  dequeue() {
    return this.nodes.shift();
  }

  sort() {
    this.nodes.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.nodes.length === 0;
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(node1, node2, weight) {
    this.nodes.get(node1).push({ node: node2, weight: weight });
    this.nodes.get(node2).push({ node: node1, weight: weight }); // if the graph is undirected
  }

  dijkstra(start) {
    const distances = new Map();
    const pq = new PriorityQueue();
    const previous = new Map();

    for (let node of this.nodes.keys()) {
      if (node === start) {
        distances.set(node, 0);
        pq.enqueue(0, node);
      } else {
        distances.set(node, Infinity);
        pq.enqueue(Infinity, node);
      }
      previous.set(node, null);
    }

    while (!pq.isEmpty()) {
      const smallest = pq.dequeue().key; // get the node with the smallest distance (which will be the first element in the list)

      if (distances.get(smallest) === Infinity) {
        break;
      }

      for (let neighbor of this.nodes.get(smallest)) {
        let alt = distances.get(smallest) + neighbor.weight;

        if (alt < distances.get(neighbor.node)) {
          distances.set(neighbor.node, alt);
          previous.set(neighbor.node, smallest);
          pq.enqueue(alt, neighbor.node);
        }
      }
    }

    return { distances, previous };
  }

  getPath(previous, end) {
    let path = [];
    while (previous.get(end)) {
      path.push(end);
      end = previous.get(end);
    }
    path.push(end);
    return path.reverse();
  }
}

// Usage Example:
const g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("X");

g.addEdge("A", "B", 10);
g.addEdge("A", "C", 3);
g.addEdge("A", "D", 2);
g.addEdge("B", "E", 5);
g.addEdge("C", "E", 2);
g.addEdge("C", "X", 20);
g.addEdge("D", "X", 10);
g.addEdge("E", "X", 4);

const { distances, previous } = g.dijkstra("A");
console.log(previous);
console.log(distances); // Map { 'A' => 0, 'B' => 10, 'C' => 3, 'D' => 2, 'E' => 5, 'X' => 9 }
console.log(g.getPath(previous, "X")); // [ 'A', 'C', 'E', 'X' ]
