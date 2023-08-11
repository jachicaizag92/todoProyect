import { Todo } from '../types/todoType';
import TodoItem from './TodoItem'



interface TodoListProps {
    todos?: Todo[];

}


const TodoList = ({ todos }: TodoListProps) => {
    return (
        <div className="bg-white rounded-t- md mt-8 ">
            {todos?.map((todo:any)=>(
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList