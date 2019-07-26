import React, {Component} from 'react'
import RestaurantsList from './restaurants-list';

class App extends Component {
  render() {
    return (
      <section>
        <RestaurantsList restaurants={this.props.restaurants}/>
      </section>
    )
  }
}

export default App
