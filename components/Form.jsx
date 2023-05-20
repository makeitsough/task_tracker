import Link from 'next/link';

const Form = ({ type, task, setTask, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="green_gradient">Create Task</span>
      </h1>
      <p className="desc text-left max-w-md">Create some tasks and start!</p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            New Item
          </span>

          <input
            value={task.task}
            onChange={(e) => setTask({ task: e.target.value })}
            placeholder="TODO..."
            required
            className="form_input"
          />
        </label>
      </form>
    </section>
  );
};

export default Form;
