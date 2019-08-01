import { Queue } from './ds/queue';
import { Stack } from './ds/stack';

const queue = new Queue();
const stack = new Stack();

queue.enqueue('queue 1');
queue.enqueue('queue 2');
queue.enqueue('queue 3');
queue.enqueue('queue 4');
queue.enqueue('queue 5');

const app = document.getElementById('app');

app.innerHTML = `
  queue size: ${queue.size()}
`;
