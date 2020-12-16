import React,{useEffect, useState} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container
  } from 'reactstrap';
  import '../styles/home.css'
export default function Singleprod(props) {
    const {items, count} = props;
    //console.log(count);
    return (
        <Container className="single">
           <a href='/addprod'>Add New Product</a><br/>
        {
            items.map((item,index)=>{
                return(
                    <div key={index} className="listitem">
                    <Card style={{"width":300, "margin-top":10}}>
                     <CardImg top width="100%" src={item.link} style={{"height":150}} alt="Card image cap" />
                     <CardBody>
                     <CardTitle>{item.title}</CardTitle>
                     <CardText>{item.description}</CardText>
                    <Button>Button</Button>
                    </CardBody>
                     </Card>
                    </div>
                )
            })
        } 
        <h3>Items left:{count}</h3>
        </Container>
    )
}
