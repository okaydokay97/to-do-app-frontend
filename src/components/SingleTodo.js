import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SingleTodo extends Component {

  render(){
    return(
      <div className="text-center">
        <h1>This Is Your Task</h1>
        <div className="card" style={{"width": "18rem","margin": "auto" }}>
          <h3>{this.props.todos[0].title}</h3>
          <p>{this.props.todos[0].content}</p>
          <em>{this.props.todos[0].importance}</em><br/>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) =>{
  return {todos: state.todos}
}

export default connect(mapStateToProps)(SingleTodo)