class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map(); // keep track of our edges { key = some vertex // value = some edge }
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []); // way to store our edges
  }

  addDirectedEdge(start, end, weight = 0) {
    const adjacencies = this._adjacencyList.get(start);
    adjacencies.push(new Edge(end, weight)) // adds an edge to a vertex's set of connected edges
  }

  getNeighbors(vertex) {
    return [...this._adjacencyList.get(vertex)]; // create a copy of the adjacency list so that we do not modify that directly
  }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);

graph.addDirectedEdge(1, 2);
graph.addDirectedEdge(1, 3);
graph.addDirectedEdge(1, 4);
graph.addDirectedEdge(2, 3);

console.log(graph);

console.log(graph.getNeighbors(1));