import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => 
        <Task 
        key={index}
        text={task.text}
        category={task.category} 
        deleteTask={() => deleteTask(index)}/>
      )}
    </div>
  );
}

export default TaskList;
