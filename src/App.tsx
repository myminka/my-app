import { ChangeEvent, useState } from 'react';
import { ITask } from './ITask';
import './App.css';
import ToDoTask from './components/ToDoTask';

const App : React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'task'){
      setTask(event.target.value);
    }else{
      setDeadLine(Number(event.target.value));
    }
  }

  const addTask = () => {
    const newTask = {
      taskName:task,
      deadLine:deadLine
    }

    setTodo([...todo, newTask]);
    setTask('');
    setDeadLine(0);
  }

  const completeTask = (taskNameToDelete:string) => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }))
  }

  return (
      <div className='App'>
        <div className='header'>
          <div className='inputContainer'>
            <input type='text' name='task' placeholder='Add a task' onChange={handleChange}/>
            <input type='number' name='deadLine' placeholder='Set a deadline(in days)' onChange={handleChange}/>
          </div>
          <button onClick={addTask}>Add</button>
        </div>
        <div className='todoList'>
          {todo.map((task:ITask, key:number) =>
            <ToDoTask task={task} key={key} completeTask={completeTask} />
          )}
        </div>
      </div>
  );
}

export default App;