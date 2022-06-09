import './App.css'
import { connect } from 'react-redux'
import { Modal, CloseButton, Toast, Card } from 'react-bootstrap'
import { addTodo, deleteTodo } from './redux/actions'
import { useState } from 'react'

// function App({ todos, addTodo, deleteTodo }) {
//     const [todoInput, setTodoInput] = useState('')

//     return (
//         <div className='App'>
//             <Toast
//                 style={{
//                     width: '40vw',
//                     background: 'white',
//                     margin: '60px auto 0px auto',
//                 }}
//             >
//                 <Modal.Header>
//                     <Modal.Title>Todo List</Modal.Title>
//                 </Modal.Header>
//                 <section className='add-todo-bar'>
//                     <input
//                         id='new-task'
//                         type='text'
//                         placeholder='Add something to do here σ`∀´)σ'
//                         value={todoInput}
//                         onChange={(e) => setTodoInput(e.target.value)}
//                     />
//                     <button
//                         className='add-btn'
//                         onClick={() => {
//                             if (todoInput === '') return
//                             addTodo(todoInput)
//                             setTodoInput('')
//                         }}
//                     >
//                         Add
//                     </button>
//                 </section>

//                 <Modal.Body style={{ textAlign: 'start' }}>
//                     {todos.map((todo, idx) => (
//                         <Card.Body
//                             key={idx}
//                             style={{
//                                 display: 'flex',
//                                 justifyContent: 'space-between',
//                             }}
//                         >
//                             {todo.name}
//                             <CloseButton onClick={() => deleteTodo(todo.id)} />
//                         </Card.Body>
//                     ))}
//                 </Modal.Body>
//             </Toast>
//         </div>
//     )
// }

// const mapStateToProps = (store) => {
//     return {
//         todos: store.todoState.todos,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTodo: (payload) => dispatch(addTodo(payload)),
//         deleteTodo: (payload) => dispatch(deleteTodo(payload)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

// ============ redux with toolkit =============================
import { useSelector, useDispatch } from 'react-redux'
// 引入对应的方法
import {
    increment,
    decrement,
    // asyncIncrement,
} from './reduxWithToolkit/store/features/counterSlice'
import { getMovieData } from './reduxWithToolkit/store/features/movieSlice'
function App() {
    // 通过useSelector直接拿到store中定义的value
    const { value } = useSelector((store) => store.counter)
    // 通过useSelector直接拿到store中定义的list
    const { list } = useSelector((store) => store.movie)
    // 通过useDispatch 派发事件
    const dispatch = useDispatch()
    // 变量
    const [amount, setAmount] = useState(1)

    return (
        <div className='App'>
            <header className='App-header'>
                {/* 页面中应用的代码 */}
                <p>{value}</p>
                <input
                    value={amount}
                    onChange={(e) => setAmount(+e.target.value)}
                />
                <button
                    onClick={() => {
                        dispatch(increment({ value: amount }))
                    }}
                >
                    加
                </button>
                {/* <button
                    onClick={() => {
                        dispatch(asyncIncrement())
                    }}
                >
                    异步加
                </button> */}
                <button
                    onClick={() => {
                        dispatch(decrement())
                    }}
                >
                    减
                </button>
                <button
                    onClick={() => {
                        dispatch(getMovieData())
                    }}
                >
                    获取数据
                </button>
                <ul>
                    {list.map((item) => {
                        return <li key={item.tvId}> {item.name}</li>
                    })}
                </ul>
            </header>
        </div>
    )
}

export default App
