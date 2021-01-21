const Graph=require('./WgraphsAdjList');
const PriorityQueue=require('./PriorityQueues');
nodes=['S','A','B','C','D','G'];
heuristics=[10,3,2,1,4,0];
// nodes=['A','B','C','D','E','F','G','H','I','J'];
// heuristics=[0,1,6,3,0,0,0,0,0,0];
// heuristics=[12,13,14,3,15,16,17,18,2,0];
g=new Graph(nodes,heuristics);
g.add_edges('S','A');
g.add_edges('S','B');
g.add_edges('A','C');
g.add_edges('A','D');
g.add_edges('B','D');
g.add_edges('B','G');
g.add_edges('D','C');
g.add_edges('D','G');
////////////////////////////////////
// g.add_edges('A','B');
// g.add_edges('A','C');
// g.add_edges('A','D');
// g.add_edges('B','E');
// g.add_edges('B','F');
// g.add_edges('B','G');
// g.add_edges('C','H');
// g.add_edges('D','I');
// g.add_edges('D','J');
g.print_adjList();
console.log(g);
g.print_nodesAndHeuristics();

function BestFirstSearch(Start,Goal,nodes){
      PQ=new PriorityQueue();
      visitedlist=new Map();
      for (const node of nodes){
        visitedlist[node]=false;
    } 
      PQ.enqueue(g.nodeAndHeuristic[Start],Start);
      visitedlist[Start]=true;
    //   console.log(PQ);
    // console.log(visitedlist);
    let path=[];
    while (!PQ.isEmpty()){
        if (PQ.isEmpty()){
            let str='Fail';
            return str;
        }
        let Node=PQ.dequeue();
        // console.log(Node);
        Node=Node[1];
        path.push(Node);
        // console.log(path);
        // console.log(Node);
        // console.log(Node);
        // console.log(g.adj_list['S'].length);
        if (Node==Goal){
            console.log(path);
            return path;
        }
        else{
            for (i=0;i<g.adj_list[Node].length;i++){
                if(!visitedlist[g.adj_list[Node][i]]){
                PQ.enqueue(g.nodeAndHeuristic[g.adj_list[Node][i]],g.adj_list[Node][i]);
                visitedlist[g.adj_list[Node][i]]=true;
                }
            }
            console.log(PQ);

        }


    }
}
BestFirstSearch('S','G',nodes);