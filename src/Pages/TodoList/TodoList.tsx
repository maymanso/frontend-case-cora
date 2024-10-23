import { useState, ChangeEvent, useMemo, useCallback } from "react";

import logoImage from "../../assets/logo.svg";
import { TODO_LIST } from "./initial-state";

import { TaskStatusType, TaskType } from "../../types/todoList/todoList.type";

import "./todoList.css";
import { LogoCora } from "../../style/common/LogoCora/coraLogo.style";
import { TitlePrimary, TitleTertiary } from "../../style/common/Titles/titles.style";
import { Paragraph, Span } from "../../style/common/Paragraphs/paragraphs.style";
import { TagStatus } from "./style/Tag/tag.style";

const TodoList = () => {
  const [tasks, setTasks] = useState<TaskType[] | []>(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchTasks = useMemo(() => {
    return tasks.filter(task => task.title.includes(searchInputValue));
  }, [tasks, searchInputValue]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  }, []);

  const handleOnSubmit = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, [])

  const handleRemoveTask = (id: string) => {
    const tasksWithoutRemovedTask = tasks.filter(task => task.id !== id);

    setTasks(tasksWithoutRemovedTask);
  };

  const handleChangeTaskStatus = (id: string, status: TaskStatusType) => {
    const updateTaskStatus: TaskStatusType = status === "pending" ? "done" : "pending";

    const updatedTasks = tasks.map(task =>
      task.id === id ? {
        ...task,
        status: updateTaskStatus
      } :
        task
    );

    setTasks(updatedTasks);
  };

  return (
    <section id="page" className="todo">
      <article className="todo__article">
        <LogoCora src={logoImage} alt="Logo do banco Cora" title="Cora" />
        <TitlePrimary>Weekly to-do list 🗓 </TitlePrimary>
        <Paragraph $color="--color-main" $fontSize="1.8em">
          Bem-vindo ao nosso produto <Span $italic >fake</Span> de to-do list

        </Paragraph>
        <Paragraph $color="--color-gray" $fontSize="1.8em">
          Marque como
          <Span $bold> done </Span>
          as tasks que você conseguir concluir elas já precisam renderizar com o status
          <Span $bold > done </Span>. Os items obrigatórios estão marcados
          com arterístico <Span $bold $color="--color-main">*</Span>
        </Paragraph>
      </article>
      <div className="todo__wrapper">
        <form className="todo__search" onSubmit={handleOnSubmit}>
          <input
            id="search"
            className="todo__search__input"
            placeholder="buscar por nome da task"
            value={searchInputValue}
            onChange={handleChange}
          />
          <button className="todo__search__button" type="submit">buscar</button>
        </form>
        <div className="todo__list">
          {searchTasks.length === 0 && (
            <article className="todo__list--no-results">
              <Paragraph>
                <Span $bold>Ops!!!</Span> Nenhum resultado foi encontrado 😕
              </Paragraph>
            </article>
          )}
          {searchTasks.map((task, index) => {
            return (
              <div className="todo__list__item" key={index}>
                <TitleTertiary $fontSize="2.5em">
                  <Span>
                    {task.ref}
                    {task.required ? "*" : "."}
                  </Span>
                  {task.title}
                  <TagStatus $status={task.status}>{task.status}</TagStatus>
                </TitleTertiary>
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
                  <button
                    className="todo__actions__button"
                    onClick={() => handleRemoveTask(task.id)}>
                    delete
                  </button>
                  <button
                    className="todo__actions__button--bold"
                    onClick={() =>
                      handleChangeTaskStatus(task.id, task.status)
                    }
                  >
                    {/* <span className="todo__paragraph--bold" > */}
                    {task.status === "done" ? "pending" : "done"}
                    {/* </span> */}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section >

  );
}

export default TodoList;
