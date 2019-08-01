import { Queue } from './ds/queue';
import { Stack } from './ds/stack';
import { Node, LinkedList } from './ds/linkedlist';

const queue = new Queue();
const stack = new Stack();

const node1 = new Node('node1');
const node2 = new Node('node2');
const node3 = new Node('node3');
const node4 = new Node('node4');
const node5 = new Node('node5');
const node6 = new Node('node6');

const list = new LinkedList();

queue.enqueue('queue 1');
queue.enqueue('queue 2');
queue.enqueue('queue 3');
queue.enqueue('queue 4');
queue.enqueue('queue 5');

stack.push('stack 1');
stack.push('stack 2');
stack.push('stack 3');
stack.push('stack 4');
stack.push('stack 5');

list.insert(node1);
list.insert(node2);
list.insert(node3);
list.insert(node4);
list.insert(node5);
list.insert(node6);

const app = document.getElementById('app');

app.innerHTML = `
  <div>queue size: ${queue.size()}</div> 
  <div>stack size: ${stack.size()}</div>
  <div>list size: ${list.size()}</div>
`;
