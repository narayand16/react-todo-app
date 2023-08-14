export interface TodoProps {
  id: string;
  title: string;
  isComplete: boolean;
  addTodo: (arg: string) => void;
  toggleTodo: (id: string, isComplete: boolean) => void;
  deleteTodo: (id: string) => void;
}
