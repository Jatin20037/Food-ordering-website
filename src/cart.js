import './cart.css';
import {Container,Row,Col} from 'react-bootstrap';
import React,{useEffect,useState,useContext} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router-dom';
import data from './data.js';

function Cart()
{
useEffect(()=>{  
document.getElementById("close").addEventListener("click",()=>{
  document.getElementById("cartdiv").style.right="-100%";
})
document.getElementById("open").addEventListener("click",()=>{
  document.getElementById("cartdiv").style.right="0%";
})
})

  const[cart,setCart]=useState([]);
function handle(product)
{
  console.log(product);
  setCart([...cart,product]);
}
const handleremove = (index)=>{
  setCart(cart.filter((data)=> data!==index)); 
  
  }


  
  const[menu,setMenu]=useState([]);

  const array = [];
  const params = useParams();
  const {name} = params;

  var dta = name.toLowerCase();

  useEffect(()=>{
   Axios.post("http://localhost:3001/api/get/dish",{name:dta}).then(() => {

  }).catch((error) => {
    console.log(error)
});

  

Axios.get("http://localhost:3001/api/get/dishcat").then((response)=>setMenu(response.data))
  
},[]);




return(
  <>

   <Container fluid id="top">
    <center>
        <br/>
   <span  id = "heading"> M E N U</span><br/>
   <span  id = "heading1"> F i n d&nbsp;&nbsp;&nbsp;T h e&nbsp;&nbsp;&nbsp;B e s t&nbsp;&nbsp;&nbsp;F o o d !</span>
   <span className = "addtocart2" style={{color:'black',position:"absolute",left:"90%",top:"5%",cursor:"pointer"}} id = "open">CART&nbsp;&nbsp;{Object.keys(cart).length}</span>
   <br/></center>
   
    </Container>
    <br/> <br/> <br/> <br/> 
    <Container>    <Row className = "categoryrow">
{
    
    menu.map((dataa)=>(
      <Col md="4" className="categorycard">
            <center><div >
             <img src = {require("./"+dataa.pic)} className = "categoryimg" />
           <br/><br/>
           <span style = {{margin:"10%",color:"black",fontSize:"min(2vw,3rem)"}}>{dataa.dish}</span><p/>
           <span style = {{marginLeft:"10%",color:"black"}} >{dataa.price}</span>
           <span style = {{marginRight:"10%",color:"black"}}>/-</span>
           <button className = "addtocart2" onClick = {()=>handle(dataa)} id = "add">A D D&nbsp;&nbsp;&nbsp;T O&nbsp;&nbsp;&nbsp;C A R T</button>
           <br/><br/>    <br/>
           </div></center>
         </Col>
       
    ))
    
  
}
   </Row>
   </Container>

   
<div id = "cartdiv">
  <center>
    <br/><br/>
<span style = {{fontSize:"min(3vw,3rem)",color:"black"}}>C A R T</span>
<span style={{color:'black',position:"absolute",left:"90%",fontSize:"min(3vw,3rem)",top:"5%",cursor:"pointer"}} id = "close">x</span>
</center>
<br/><br/>
<table style = {{width:"100%"}}>
<thead>
<tr>
  <th> <center className = "cartitems">ITEM </center></th>
  <th> <center className = "cartitems">PRICE </center></th>
  <th> <center className = "cartitems">ACTION </center></th>
</tr>
</thead>
<tbody id = "tbody">
{
    
    cart.map((dataa2)=>(
      <tr>
        <td><center className = "cartitems">{dataa2.dish}</center></td>       
        <td><center className = "cartitems">{dataa2.price}</center></td>   
        <td><center className = "cartitems"><button className = "addtocart2" onClick = {()=>handleremove(dataa2)}>Remove</button></center></td>   
      </tr>
       
    ))
    
  
}
</tbody>
</table>

</div>
    </>
)
}export default Cart
