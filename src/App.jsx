import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState("")
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList))
  }, [todoList])

  function onClickSubmit(e) {
    e.preventDefault()

    setTodoList(currentTodoList => {
      return [
        ...currentTodoList,
        { id: crypto.randomUUID(), title: newItem, checked: false }
      ]
    })

    setNewItem("")
  }

  function toggleTodoList(id, checked) {
    setTodoList(currentTodoList => {
      return currentTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked }
        }
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
      <div onSubmit={onClickSubmit} className="formLayout">
        <form className="newItemForm">
          <label htmlFor="item">Input text</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text" id="item" />
        </form>
        <button className="btn">추가</button>
      </div>

      <div className="todoLayout">
        <div>TODO List</div>
        <ul className="todoList">
          {todoList.length === 0 && "리스트가 없습니다"}
          {todoList.map(todo => {
            return (
              <li key={todo.id}>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={e => toggleTodoList(todo.id, e.target.checked)}
                  />
                  <span>{todo.title}</span>
                </label>
                <button className="btn" onClick={() => deleteTodoList(todo.id)}>삭제하기</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
