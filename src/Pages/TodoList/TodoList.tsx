import { useState, ChangeEvent } from "react";

import logoImage from "../../assets/logo.svg";
import { TODO_LIST } from "./initial-state";
import { ITodoTypes } from "./types";

import "./todoList.css";

const TodoList = () => {
  const [items, setItems] = useState(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event: ChangeEvent<unknown>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(searchInputValue);
  };

  const handleDeleteTask = (id: number) => {
    const editedItems = [];

    items.map((item) => {
      if (item.id !== id) {
        editedItems.push(item);
      }
    })

    setItems(editedItems);
  };

  const handleChangeTaskStatus = (id: string, status: ITodoTypes) => {
    const reversedStatus = status === "pending" ? "pending" : "done";
    const editedItems = [];

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        editedItems.push({
          ...items[i],
          status: reversedStatus,
        });
      } else {
        editedItems.push(items[i]);
      }
    }

    setItems(editedItems);
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
        <form className="todo__search" onSubmit={handleSearch}>
          <input
            id="search"
            className="todo__search__input"
            placeholder="busca por texto..."
            value={searchInputValue}
            onChange={handleChange}
          />
          <button className="todo__search__button" type="submit">buscar</button>
        </form>
        <ul className="todo__list">
          {items.length === 0 && (
            <article className="todo__list--no-results">
              <p>
                <span className="todo__paragraph--bold" >Ops!!!</span> Nenhum resultado foi encontrado 😕
              </p>
            </article>
          )}
          {items.map((item, index) => {
            return (
              <li className="todo__list__item" key={index}>
                <p className="todo__paragraph--bold" >
                  {index + 1}
                  {item.required ? "*" : ""}.
                </p>
                <div className="todo__content">
                  <h3 className="todo__content__title">
                    {item.title}
                    <span data-type={item.status}>{item.status}</span>
                  </h3>
                  <p className="todo__content__paragraph">{item.description}</p>
                  {item.links && item.links.length > 0 && (
                    <div className="todo__links">
                      {item.links.map((link) => (
                        <a key={link.name} target="_blank" href={link.url}>
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="todo__actions">
                  <button onClick={() => handleDeleteTask(item.uuid)}>
                    delete
                  </button>
                  <button
                    onClick={() =>
                      handleChangeTaskStatus(item.id, item.status)
                    }
                  >
                    change to
                    <span className="todo__paragraph--bold" >
                      {item.status === "done" ? "pending" : "done"}
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
