import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import  './components/Todo.css';
const todo= [
  {
    task: 'stuff',
    id: new Date(),
    completed: false
  }
];
class App extends React.Component {
 constructor(){
   super();
   this.state= {
    todo, 
    task: ''
   };
  }
 toggleTask = clickedItemId =>{
   this.setState({
     todo: this.state.todo.map(item => {
       if (item.id === clickedItemId) {
         return{
         ...item,
         completed: !item.completed
       };
       
       } else {
       return item; 
       }
     })
     });
   
  }
  addItem = itemName => {
   
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
          <div>
            <TodoList todo={this.state.todo} toggleTask={this.toggleTask}/>
            </div>
      </div>
      
      
      
     
    );
  }
}

export default App;
