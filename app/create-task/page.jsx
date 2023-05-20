'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateTask = () => {
  const [submitting, setSubmitting] = useState(false);
  const [task, setTask] = useState({
    task: '',
  });

  const createTask = async (e) => {};

  return (
    <Form
      type="Create"
      task={task}
      setTask={setTask}
      submitting={submitting}
      handleSubmit={createTask}
    />
  );
};

export default CreateTask;
