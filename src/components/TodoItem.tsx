import CrossIcon from './icons/crossIcon'


// type Todo = {
//     id: number;
//     title: string;
//     completed: boolean;
//     todo?:any
// };
const TodoItem = ({todo}:any) => {
    return (
        <article className="flex space gap-4 py-4 border-b-gray-200 border-b px-4">
            <button className="inline-block rounded-full border-2 h-5 w-5"></button>
            <p className="grow ">{todo.title} </p>
            <button><CrossIcon /></button>
        </article>
    )
}

export default TodoItem