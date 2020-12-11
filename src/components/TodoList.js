import { useState } from "react";

const TodoList = ({ allTasks, setAllTasks }) => {
	const [doneTasks, setDoneTasks] = useState([]);

	return (
		<div className='allTasks'>
			{allTasks &&
				allTasks.length > 0 &&
				allTasks.map((task, i) => (
					<TodoItem
						key={i}
						index={i}
						task={task}
						doneTasks={doneTasks}
						deleteTask={(taskIndex) =>
							setAllTasks(
								[...allTasks].filter((task, index) => index !== taskIndex)
							)
						}
						doneTask={(taskIndex) => setDoneTasks([...doneTasks, taskIndex])}
					/>
				))}
		</div>
	);
};

const TodoItem = ({ index, task, deleteTask, doneTasks, doneTask }) => (
	<div className='todoItem'>
		<div
			className={`description ${
				doneTasks && doneTasks.length > 0 && doneTasks.includes(index)
					? "task-done"
					: ""
			}`}
		>
			{task}
		</div>
		<button
			className='btn_act done'
			disabled={doneTasks && doneTasks.length > 0 && doneTasks.includes(index)}
			onClick={() => doneTask(index)}
		>
			Done
		</button>
		<button className='btn_act delete' onClick={() => deleteTask(index)}>
			Delete
		</button>
	</div>
);

export default TodoList;
