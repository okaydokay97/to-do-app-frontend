import React, { Component } from 'react'
import { addCurrentUser } from '../actions/addCurrentUser'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


export class Home extends Component {

  state = {
    username: ""
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(user => { this.props.addCurrentUser(user)})
  }

  render() {
    return(
      <div className="text-center">
        <h1> Welcome to TrackIt!</h1>
        <form id="sign-in" onSubmit={this.handleSubmit}>
          <label>
            Please Sign In: <br/>
            <input onChange={this.handleChange} type="text" placeholder="Username" name="username"></input>
          </label>
          <br/>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = {
  addCurrentUser
}



export default connect(null, mapDispatchToProps )(Home)