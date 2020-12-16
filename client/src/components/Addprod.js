import React,{useState} from 'react'
import {Container, Button} from 'reactstrap'
import '../styles/addprod.css'
import axios from 'axios'
export default function Addprod() {
    const[title, settitle] = useState('');
    const[description, setdescription] = useState('');
    const[link, setlink] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        let body={
            title,
            description,
            link
        };
        console.log(body);

        axios.post('/addproducts',body).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <Container fluid >
        <form onSubmit={handleSubmit} className="forms">
            <input type="text" className="name" placeholder="title" onChange={e=>{settitle(e.target.value)}} /><br/>
            <textarea id="w3review" className="textpart" placeholder="description" rows="6" cols="30" onChange={e=>{setdescription(e.target.value)}} /><br/>

            <input type="text" className="name" placeholder="image link" onChange={e=>{setlink(e.target.value)}} /><br/>
            <Button>submit</Button>
        </form>

        </Container>
    )
}
