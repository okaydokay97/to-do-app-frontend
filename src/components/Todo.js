import React from 'react'
import { Link } from 'react-router-dom'
import { addTodos } from '../actions/addTodos'
import { connect } from 'react-redux'


export function todo(props) {

  const handleClick = () => {
    props.addTodos(props.info)
  }

  const handleDeleteClick = () => {
    console.log(props)
    props.addTodos(props.info)
    fetch(`http://localhost:3000/todos/${props.info.id}`,{
      method: "DELETE"
    })
    // let history = useHistory();
    // history.push('/viewtasks')
  }

  return (
    <div className="card" style={{ "width": "18rem", "margin": "auto"}} id={props.id}>
      <div className="card-body">
      <h3>{props.info.title}</h3>
      <em>{props.info.importance}</em><br/>
      <Link to="/todo">
        <button onClick={handleClick} type="button">
          View
        </button>
      </Link><br/>
      <Link to="/edittask">
        <button onClick={handleClick} type="button">Edit</button>
      </Link>
      <button onClick={handleDeleteClick}>Delete</button><br/>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  addTodos
}



export default connect(null, mapDispatchToProps )(todo)