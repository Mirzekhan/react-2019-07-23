import React, {Component} from 'react'

class Order extends Component {
  state = {
    userName: ''
  }

  render() {
    return (
      <form
        style={{padding: '24px'}}
        onSubmit={this.handleSubmit}
      >
        <input
          ref={this.setInput}
          placeholder={'User name'}
          value={this.state.userName}
          onChange={this.handleUserNameInputChange}
        />
        <button
          type={'submit'}
        >Send order</button>
      </form>
    )
  }

  handleUserNameInputChange = (event) => {
    this.setState({
      userName: event.target.value.length > 5 ? '' : event.target.value
    })
  }

  setInput = (ref) => {
    this.userNameInput = ref
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
  }
}

export default Order
