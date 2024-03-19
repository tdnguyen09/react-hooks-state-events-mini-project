import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTasksList] = useState(TASKS);
  const [selectedCategory, setSeclectedCategory] = useState("All");

  function handleDeleteTask(index){
    const newTaskList = taskList.filter((task, id) => id !== index);
    setTasksList(taskToDisplay(newTaskList));
  }

  function handleCategoryClick(event){
    let selectedCategory = event.target.value
    setSeclectedCategory(selectedCategory)
  }
  function taskToDisplay (tasks){
    if (selectedCategory === "All") {
      return tasks;
    } else {
      return tasks.filter((task) => task.category === selectedCategory);
    }
  }
  function addTask (newTask) {
    const newTasks = [...taskList, newTask]
    setTasksList(taskToDisplay(newTasks));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoriesClick={handleCategoryClick} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={taskToDisplay(taskList)} deleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
