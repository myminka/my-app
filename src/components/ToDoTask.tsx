import { ITask } from "../ITask";

interface Props{
    task: ITask;
    completeTask(taskNameToDelete:string):void;
}

const ToDoTask = ({task, completeTask}: Props) => {
    return(
      <div className='task'>
        <div className='content'>
          <span>{task.taskName}</span>
          <span>{task.deadLine}</span>
        </div>
        <button onClick={() => {
            completeTask(task.taskName)
        }}>X</button>
      </div>
    )
}

export default ToDoTask;