import { TodoProps } from "./Todo.interface";

export interface TodoListProps {
  todos: TodoProps[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string, isComplete: boolean) => void;
}
