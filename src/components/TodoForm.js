import { useState } from "react";

const TodoForm = ({ addTask }) => {
	const [task, setTask] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task && task.trim().length > 0) {
			addTask(task);
			setTask("");
		} else {
			setError(true);
		}
	};

	const handleInput = (e) => {
		setError(false);
		setTask(e.target.value);
	};

	return (
		<>
			<form className='todoForm' onSubmit={handleSubmit}>
				<div className='formGroup'>
					<input
						placeholder='Enter a task'
						type='text'
						className='inputBox'
						value={task}
						onChange={handleInput}
					/>
					<input type='submit' value='Add Task' className='submitBtn' />
				</div>
				{error && <div className='error'>Enter a valid task</div>}
			</form>
		</>
	);
};

export default TodoForm;
