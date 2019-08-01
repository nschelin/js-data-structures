import { Queue } from './ds/queue';
import { Stack } from './ds/stack';
import { Node, LinkedList } from './ds/linkedlist';

const max = Math.random() * 20;
const queue = new Queue();
const stack = new Stack();
const list = new LinkedList();

for (var i = 0; i < max; i++) {
	let rand = Math.random();
	if (rand < 0.556) queue.enqueue(`queue ${i}`);
	if (rand > 0.7532) stack.push(`stack ${i}`);
	if (rand > 0.369) list.insert(new Node(`node ${i}`));
}

const app = document.getElementById('app');

app.innerHTML = `
  <div>queue size: ${queue.size()}</div> 
  <div>stack size: ${stack.size()}</div>
  <div>list size: ${list.size()}</div>
`;
