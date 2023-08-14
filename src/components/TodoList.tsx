import { TodoProps } from "../models/Todo.interface";
import { TodoListProps } from "../models/TodoList.interface";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
  return (
    <ul>
      {!todos.length && "No Todos"}
      {todos.map((todo: TodoProps) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          ></TodoItem>
        );
      })}
    </ul>
  );
}
