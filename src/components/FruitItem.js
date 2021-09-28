import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class FruitItem extends React.Component {


addToFav=(item)=>{
    const {user} = this.props.auth0;
    const obj={
        name:item.name,
        image:item.image,
        price:item.price,
        email:user.email
    }
axios.post(`https://exam-suhaib401.herokuapp.com/addFruit`,obj).then(result=>{
    console.log(result);
})
}



    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.image} />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        <Card.Text>
                            price : {this.props.item.price}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.addToFav(this.props.item)}>add to fav</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }


}

export default withAuth0(FruitItem);
