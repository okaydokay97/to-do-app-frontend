import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodos } from '../actions/addTodos'

export class NewTaskForm extends Component {

  state = {
    title: "",
    content: "",
    importance: 1,
    user: this.props.user
  }


  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props)
    fetch(`http://localhost:3000/todos/${this.props.todos[0].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(newTodo => {
      this.props.addTodos(newTodo)
    })
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }


  handleNumChange = (event) => {
    this.setState({
      importance: event.target.value
    })
  }



  render() {
    return(
      <div className="text-center">
        <h1>Update Your Task</h1><br/>
        <form onSubmit={this.handleSubmit}>
          <label>Task Title:<br/>
            <input onChange={this.handleTitleChange} type="text" name="title" placeholder="Title"></input><br/><br/>
          </label>
          <div></div>
          <label>Task Description:<br/>
            <textarea onChange={this.handleDescriptionChange} type="text" name="title" placeholder="Description"></textarea><br/><br/>
          </label>
          <div></div>
          <label>Task Importance:<br/>
            <select onChange={this.handleNumChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label><br/><br/>
          <input type="submit" value="Submit"></input>
        </form>
      </div>

    )
  }

}

const mapDispatchToProps = {
  addTodos
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
    todos: state.todos
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(NewTaskForm)