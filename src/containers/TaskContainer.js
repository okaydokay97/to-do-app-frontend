import React, { Component } from 'react'
import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { link } from 'react-router-dom'


const URL = "http://localhost:3000/todos"

export class TaskContainer extends Component{

  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
 

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(todoArr => {
      let sortedArr = todoArr.filter(todo => todo.user.id === this.props.user.id)
      this.setState({
        todos: sortedArr
      })
    })
  }

  renderTasks = () => {
    return this.state.todos.map( (todo, index) => {
      return <Todo info={todo} key={index} id={index} />
    })
  }


  
  render() {
    return (
      <div className="text-center">
        <h1>All Your Tasks</h1>
        {this.renderTasks()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.currentUser}
}

export default connect(mapStateToProps)(TaskContainer)