import './App.css';
import { connect } from "react-redux";
import { Modal, CloseButton, Toast, Card } from 'react-bootstrap';
import { addTodo, deleteTodo } from "./redux/actions"
import { useState } from 'react'


function App({todos, addTodo, deleteTodo}) {
  const [todoInput, setTodoInput] = useState('')

  return (
    <div className="App">
      <Toast style={{ width: '40vw', background: 'white', margin: '60px auto 0px auto' }}>
        <Modal.Header>
          <Modal.Title>Todo List</Modal.Title>
        </Modal.Header>
        <section className='add-todo-bar'>
          <input 
            id="new-task" 
            type="text" 
            placeholder="Add something to do here σ`∀´)σ" 
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button 
            className='add-btn' 
            onClick={() => {
              if (todoInput === '') return
              addTodo(todoInput)
              setTodoInput('')
            }}
          >
            Add
          </button>
        </section>
        
        <Modal.Body style={{ textAlign: 'start'}}>
          {todos.map((todo, idx) => (
            <Card.Body key={idx} style={{ display: 'flex', justifyContent: 'space-between'}}>
              {todo.name}
              <CloseButton onClick={() => deleteTodo(todo.id)}/>
            </Card.Body>
          ))}
        </Modal.Body>
      </Toast>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    todos: store.todoState.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload)),
    deleteTodo:  (payload) => dispatch(deleteTodo(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
