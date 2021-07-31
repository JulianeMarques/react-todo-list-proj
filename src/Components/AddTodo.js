import React, { Component } from "react";

export class AddTodo extends Component {
  render() {
    return (
      <from style={{ display: 'flex' }}>
        <input 
          style={{ flex: '10', padding: '15px' }}
          type="text" 
          name="title" 
          placeholder="Add Todo..."
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{ flex: '1' }}
        />
      </from>
    );
  }
}

export default AddTodo;
