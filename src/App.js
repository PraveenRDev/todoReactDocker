import { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
import "./components/style.css";
import TodoList from "./components/TodoList";
function App() {
	const [allTasks, setAllTasks] = useState([]);

	const addTask = (task) => {
		setAllTasks([...allTasks, task]);
	};

	return (
		<div className='container'>
			<TodoForm addTask={addTask} />
			<TodoList allTasks={allTasks} setAllTasks={setAllTasks} />
		</div>
	);
}

export default App;
