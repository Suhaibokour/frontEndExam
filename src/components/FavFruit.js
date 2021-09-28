import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';

class FavFruit extends React.Component {


constructor(props){
  super(props);
  this.state = {
    favArr:[],
    showArr:false,
    id:''
  }
}


componentDidMount=()=>{
  const {user} = this.props.auth0;
  let email = user.email;
  axios.get(`http://localhost:3030/getFruit?email=${email}`).then(result=>{
    this.setState({favArr:result.data});
  })
}



delete=(id)=>{
  const {user} = this.props.auth0;
  let email = user.email;
  axios.delete(`http://localhost:3030/deleteFruit/${id}?email=${email}`).then(result=>{
    this.setState({favArr:result.data});
  })
}


showModal=(item)=>{
  this.setState({
    name: item.name,
    image: item.image,
    price: item.price,
    id: item._id,
    show:true
  })
}



update=(event)=>{
  event.preventDefault();
  const {user} = this.props.auth0;
  const obj={
    name: event.target.name.value,
    image: event.target.image.value,
    price: event.target.price.value,
    email:user.email
  }
  axios.put(`http://localhost:3030/updateFruit/${this.state.id}`,obj)
  .then(result=>{
    this.setState({
      favArr:result.data
    })
  }).catch(err=>{
    console.log(err)
  })
  this.setState({
    show:false
  })

}

handleClose=()=>{
  this.setState({
    show:false
  })
}

  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>
        {this.state.favArr.map(item=>{
          return (
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            price : {item.price}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.showModal(item)}>update</Button>
                        <Button variant="danger" onClick={()=>this.delete(item._id)}>delete</Button>
                    </Card.Body>
                </Card>

          )
        })}


        <ModalForm
        show={this.state.show}
        name={this.state.name}
        image={this.state.image}
        price={this.state.price}
        update={this.update}
        close={this.handleClose}
        />
        
      </>
    )
  }
}

export default withAuth0(FavFruit);
