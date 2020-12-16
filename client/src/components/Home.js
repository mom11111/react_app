import React,{useState, useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Prod from './Singleprod'
import '../styles/home.css'
import axios from 'axios'
export default function Home() {
    const [items, setitems] = useState([]);
    const [count,setcount] = useState();
    useEffect(()=>{
        axios.get('/products').then(allprod=>{
            localStorage.setItem('items',JSON.stringify(allprod.data));
            setcount(allprod.data.length);
            const prods=[];
            for(let i=0;i<6;i++){
                prods.push(allprod.data[i]);
            }
            setitems(prods);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    var counter=1;
    const prods=JSON.parse(localStorage.getItem('items'));
    useEffect(() => {
        setInterval(() => {
           const prodlist=[];
           if(prods.length>6){
                prods.shift();
                counter++;
        }
            for(let i=0;i<6;i++){
                prodlist.push(prods[i]);
            }
            setitems(prodlist);
            setcount(prods.length);
            
        }, 30000);
      }, counter);
    return (
        <Container className="mainContainer">
           <Prod items={items} count={count}/>
           </Container>
    )
}
