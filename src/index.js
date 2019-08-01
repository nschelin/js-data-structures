import { Queue } from './ds/queue';
import { Stack } from './ds/stack';
import { Node, LinkedList } from './ds/linkedlist';

const max = 5;
const queue = new Queue();
const stack = new Stack();
const list = new LinkedList();

for (var i = 0; i < max; i++) {
	queue.enqueue(`queue ${i}`);
	stack.push(`stack ${i}`);
	list.insert(new Node(`node ${i}`));
}

const app = document.getElementById('app');

app.innerHTML = `
  <div>queue size: ${queue.size()}</div> 
  <div>stack size: ${stack.size()}</div>
  <div>list size: ${list.size()}</div>
`;
