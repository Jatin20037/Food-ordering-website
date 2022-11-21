import './cart.css';
import {Container,Row,Col} from 'react-bootstrap';
import React,{useState} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


function Cart(){
var array = [];
  const[items,setItems]=useState([]);
const[category,setCategory] = useState({});
  Axios.get('http://localhost:3001/api/get').then((response)=>{
    setCategory(response.data);
    call();
  })
function call(){
  for(var i=0;i<Object.keys(category).length;i++)
  {
    const data = <Col md="4" className="categorycard">
       <center>
      <Link to = {"/cart/"+category[i]["name"]} style = {{textDecoration: "none"}}> 
        <div><img src = {require("./"+category[i]["pics"])} className = "categoryimg"/>
      <br/><br/>
      <span style = {{margin:"10%",color:"black",fontSize:"min(2vw,3rem)"}}>{category[i]["name"]}</span><p/>
     
      <br/><br/>    <br/>
      </div>
    
      </Link>
      </center>
    </Col>
    
  array.push(data);
  setItems(array);


}
}
return(
  <>

   <Container fluid id="top">
    <center>
        <br/>
   <span  id = "heading"> M E N U</span><br/>
   <span  id = "heading1"> F i n d&nbsp;&nbsp;&nbsp;T h e&nbsp;&nbsp;&nbsp;B e s t&nbsp;&nbsp;&nbsp;F o o d !</span>
   <br/></center>
   
    </Container>
    <br/> <br/> <br/> <br/> 
    <Container>
    <Row className = "categoryrow">
   {items}
   </Row>
   </Container>
    </>
)
}export default Cart
