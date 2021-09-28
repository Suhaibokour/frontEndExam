import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FruitItem from './FruitItem'


class Home extends React.Component {

constructor(props) {
  super(props);
  this.state = {
apiData:[]
  }
}

componentDidMount=()=>{
  axios.get('https://exam-suhaib401.herokuapp.com/fruit').then(result=>{
    this.setState({
      apiData:result.data
    })
  })

}


  render() {
    return (
      <>
        <h1>API Fruits</h1>
        {this.state.apiData.map(item=>{
          return (
            <FruitItem item={item} />
          )
        })}
      </>
    )
  }
}

export default Home;
