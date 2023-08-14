import { TodoProps } from "../models/Todo.interface";

export function TodoItem({ toggleTodo, deleteTodo, ...todo }: TodoProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
