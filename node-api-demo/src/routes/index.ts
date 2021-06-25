import { Router } from 'express';
import { Task } from '../interfaces/task';

type ReqBody = { text: string };
type ReqParams = { id: string };

let tasks: Task[] = [];

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ tasks });
});

router.post('/', (req, res, next) => {
  const { text } = req.body as ReqBody;
  const task: Task = {
    id: tasks.length + 1,
    text: text,
  };
  tasks.push(task);

  res.status(200).json({ tasks });
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params as ReqParams;
  const { text } = req.body as ReqBody;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id, 10));
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found.' });
  }

  tasks[taskIndex].text = text;

  res.status(200).json({ task: tasks[taskIndex] });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params as ReqParams;

  tasks = tasks.filter((task) => task.id !== parseInt(id, 10));

  res.status(200).json({ message: 'Success' });
});

export default router;
