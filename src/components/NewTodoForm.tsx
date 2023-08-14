import { FormEvent, useState } from "react";
import { NewTodoFormProps } from "../models/TodoForm.interface";

export function NewTodoForm({ addTodo }: NewTodoFormProps) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New item</h2>
      <label htmlFor="new-item"></label>
      <input
        type="text"
        id="new-item"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
