import { useEffect, useState } from 'react'
import { FormLayerComponent } from './FormLayerComponent'
import { TodoListComponent } from './TodoListComponent'
import './assets/App.css'

function App() {
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList))
  }, [todoList])

  function addTodoList(title) {
    setTodoList(currentTodoList => {
      return [
        ...currentTodoList,
        { id: crypto.randomUUID(), title, checked: false }
      ]
    })
  }

  function toggleTodoList(id, checked) {
    setTodoList(currentTodoList => {
      return currentTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked }
        }
        return todo
      })
    })
  }
  function deleteTodoList(id) {
    setTodoList(currentTodoList => {
      return currentTodoList.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <FormLayerComponent onSubmit={addTodoList} />
      <TodoListComponent
        todoList={todoList}
        toggleTodoList={toggleTodoList}
        deleteTodoList={deleteTodoList}
      />
    </>
  )
}

export default App
