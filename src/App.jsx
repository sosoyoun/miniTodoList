import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="formLayout">
        <form className="newItemForm">
          <label htmlFor="item">Input text</label>
          <input type="text" id="item" />
        </form>
        <button className="btn">추가</button>
      </div>

      <div className="todoLayout">
        <div>TODO List</div>
        <ul className="todoList">
          <li>
            <label htmlFor="">
              <input type="checkbox" />
              <span>text</span>
            </label>
            <button className="btn">삭제하기</button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
