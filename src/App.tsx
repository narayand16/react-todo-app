import { useEffect, useState } from "react";
import "./App.scss";
import { TodoProps } from "./models/Todo.interface";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<TodoProps[]>(() => {
    const localStorgaeVal = localStorage.getItem("items");
    return localStorgaeVal ? JSON.parse(localStorgaeVal) : [];
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  function onAddTodo(title: string) {
    setTodos((currentTodos: TodoProps[]) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, isComplete: false } as TodoProps,
      ];
    });
  }

  function toggleTodo(id: string, isComplete: boolean): void {
    setTodos((currentTodos: TodoProps[]) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: string): void {
    setTodos((currentTodos: TodoProps[]) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm addTodo={onAddTodo} />
      <h2>Todo List</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
