import { useState, ChangeEvent } from "react";

import logoImage from "../../assets/logo.svg";
import { TODO_LIST } from "./initial-state";
import { TaskStatusType, TaskType } from "../../types/todoList.type";

import "./todoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState<TaskType[] | []>(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchTasks, setSearchTasks] = useState<[] | TaskType[]>(TODO_LIST);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchTaskTitle = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTaskTitle = tasks.filter(task => task.title.includes(searchInputValue));

    setSearchTasks(searchInputValue ? searchTaskTitle : tasks);
  };

  const handleRemoveTask = (id: string) => {
    const tasksWithoutRemovedTask = tasks.filter(task => task.id !== id);

    setTasks(tasksWithoutRemovedTask);
    setSearchTasks(tasksWithoutRemovedTask)
  };

  const handleChangeTaskStatus = (id: string, status: ITodoTypes) => {
    const reversedStatus = status === "pending" ? "pending" : "done";
    const editedItems = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        editedItems.push({
          ...tasks[i],
          status: reversedStatus,
        });
      } else {
        editedItems.push(tasks[i]);
      }
    }

    setTasks(editedItems);
  };

  return (
    <section id="page" className="todo">
      <article>
        <img src={logoImage} alt="Cora" title="Cora"></img>
        <h2>Weekly to-do list 🗓 </h2>
        <h3>
          Bem-vindo ao nosso produto <span className="todo__paragraph--italic">fake</span> de to-do list
        </h3>
        <p>
          Marque como
          <span className="todo__paragraph--bold"> done </span>
          as tasks que você conseguir concluir elas já precisam renderizar com o status
          <span className="todo__paragraph--bold" > done </span>. Os items obrigatórios estão marcados
          com arterístico <span className="todo__paragraph--bold" >*</span>
        </p>
      </article>
      <div className="todo__wrapper">
        <form className="todo__search" onSubmit={handleSearchTaskTitle}>
          <input
            id="search"
            className="todo__search__input"
            placeholder="buscar por nome da task"
            value={searchInputValue}
            onChange={handleChange}
          />
          <button className="todo__search__button" type="submit">buscar</button>
        </form>
        <ul className="todo__list">
          {searchTasks.length === 0 && (
            <article className="todo__list--no-results">
              <p>
                <span className="todo__paragraph--bold" >Ops!!!</span> Nenhum resultado foi encontrado 😕
              </p>
            </article>
          )}
          {searchTasks.map((task, index) => {
            return (
              <li className="todo__list__item" key={index}>
                <p className="todo__paragraph--bold" >
                  {index + 1}
                  {task.required ? "*" : ""}.
                </p>
                <div className="todo__content">
                  <h3 className="todo__content__title">
                    {task.title}
                    <span data-type={task.status}>{task.status}</span>
                  </h3>
                  <p className="todo__content__paragraph">{task.description}</p>
                  {task.links && task.links.length > 0 && (
                    <div className="todo__links">
                      {task.links.map((link) => (
                        <a key={link.name} target="_blank" href={link.url}>
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="todo__actions">
                  <button onClick={() => handleRemoveTask(task.id)}>
                    delete
                  </button>
                  <button
                    onClick={() =>
                      handleChangeTaskStatus(task.id, task.status)
                    }
                  >
                    change to
                    <span className="todo__paragraph--bold" >
                      {task.status === "done" ? "pending" : "done"}
                    </span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section >

  );
}

export default TodoList;
