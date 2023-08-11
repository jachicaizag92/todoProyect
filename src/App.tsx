import { useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"
import { Todo } from "./types/todoType"



const initialStateTodos:Todo[] = [
  {id:1, title:'Go to the gym', completed:false},
  {id:2, title:'Completed study', completed:false},
  {id:3, title:'Go to the class', completed:false}
]

const App = () => {
  const [todos, setTodo] = useState(initialStateTodos)
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate />
        <TodoList todos={todos}/>
        <TodoComputed />
        <TodoFilter />
      </main>

      <footer className="mt-8 text-center">
        Drag and Drog to reorder ist
      </footer>

    </div>
  )
}

export default App