import logo from './logo.svg';
import './App.css';
import { Modal, CloseButton, Toast, Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Toast style={{ width: '50vw', background: 'white', margin: '60px auto 0px auto' }}>
        <Modal.Header>
          <Modal.Title>Todo List</Modal.Title>
        </Modal.Header>
        <section className='add-todo-bar'>
          <input id="new-task" type="text" placeholder="Add something to do here σ`∀´)σ" />
          <button className='add-btn'>Add</button>
        </section>
        
        <Modal.Body style={{ textAlign: 'start'}}>
          <Card.Body style={{ display: 'flex', justifyContent: 'space-between'}}>
            This is some text within a card body.
            <CloseButton />
          </Card.Body>
          <Card.Body style={{ display: 'flex', justifyContent: 'space-between'}}>
            This is some text within a card body.
            <CloseButton />
          </Card.Body>
        </Modal.Body>
      </Toast>
    </div>
  );
}

export default App;
