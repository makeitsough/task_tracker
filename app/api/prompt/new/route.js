import { connectToDB } from '@utils/database';
import Task from '@models/task';

export const POST = async (req, res) => {
  const { userId, task } = await req.json();
  try {
    await connectToDB();
    const newTask = new Task({ creator: userId, task });

    await newTask.save();

    return new Response(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new promt', { status: 500 });
  }
};
