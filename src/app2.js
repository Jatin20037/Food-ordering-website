import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import './App.css';
import { getQueriesForElement } from '@testing-library/react';
//import User from './Project1/User';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col} from 'react-bootstrap';
import React,{useState,useEffect} from "react";

import Axios from 'axios';
function App() {
var reviews=[];
var dish=[];

 const[length,setLength] = useState(0);
 const[dishdata,setDishdata] = useState([]);
 const[dishimgdata,setDishimgdata] = useState([]);
var sharevalue = "";
function share(e,val){
  sharevalue = val;
  const {setSharedata} = useContext(DataContext);
  
}
  
useEffect(()=>{
  
Axios.get('http://localhost:3001/api/get').then((response)=>{

  

setLength(response.data.length);
var  catdata = [];
var  catimgdata = [];

 for(var x=0;x<=response.data.length-1;x++)
 {
  catdata.push(response.data[x]["name"]);
  catimgdata.push(response.data[x]["pics"]);
  setDishdata(catdata);
  setDishimgdata(catimgdata);
 }



})


},[])

for(var i=0;i<=length-1;i++)
{
  const data =<Carousel.Item  style={{background:"none"}}>
<Link to={'/cart/'+dishdata[i]}>
  <button  value = {dishdata[i]} style = {{width:"100%",border:"none",margin:0,background:"none"}} onClick = {e => share(e,e.currentTarget.value)}>
  <img  
    className="d-block w-100"
    src={dishimgdata[i]}
    alt="First slide"
    
  />

  <Carousel.Caption style={{background:"none"}}>
    <span style={{background:"none",fontSize:"min(3vw,6rem)"}}>{dishdata[i]}</span>
   
  </Carousel.Caption>
  </button>
  </Link>
</Carousel.Item>
dish.push(data);

}


for(var i=1;i<=2;i++)
{if(i%2==0)
  {
 const reviewtemplate =  <><br/><br/><div id = "reviewtemplate1">
It’ was amazing feeling for my belly!<br/>
Mark Jhonson
  </div> </>
  reviews.push(reviewtemplate)
  }
else{
  
    const reviewtemplate = <><br/><br/><div id = "reviewtemplate2">
Great food and great atmosphere!<br/>
Mark Jhonson
     </div>
     </>
reviews.push(reviewtemplate);
}
}


  return (
<>
<div id = "navbar">
a ba

</div>
<div style = {{display:"flex",}}>

<div className = "topframe" style = {{width:"40%"}} >
<div id = "title">Best food in the city!</div><br></br>
<div id = "subtitle">Taste it now with our online order!<br></br><br></br>
<Link to = "/cart" style = {{textDecoration:"none"}}><span id = "order">O R D E R&nbsp;&nbsp;&nbsp;N O W</span></Link>
</div>
</div>
<div className = "topframe">
 
<img src = "assets/choco.jpg" id = "backgroundimg"></img>
</div>



</div>
<div style = {{background:"#303030"}}>
<br/><br/><br/><br/>
<Container style={{background:"none"}}>
<span style={{background:"none",fontSize:'min(4vw,4rem)'}}>C A T E G O R Y</span>
<br/><br/><br/>
<Row className = "categoryrow">
  <Col md="4" className="categorycard">
    <div><img src = "assets/pasta.jpg" className = "categoryimg"/>
    <br/><br/>
    <span style = {{margin:"10%"}}>P A S T A</span><p/>
    <span style = {{margin:"10%"}}>FROM 150/-</span>
    <span className = "addtocart">A D D&nbsp;&nbsp;&nbsp;T O&nbsp;&nbsp;&nbsp;C A R T</span>
    <br/><br/>    <br/>
    </div>
  </Col>
  <Col md="4" className="categorycard">
    <div><img src = "assets/pizza.jpg" className = "categoryimg"/>
    <br/><br/>
    <span style = {{margin:"10%"}}>P A S T A</span><p/>
    <span style = {{margin:"10%"}}>FROM 150/-</span>
    <span className = "addtocart">A D D&nbsp;&nbsp;&nbsp;T O&nbsp;&nbsp;&nbsp;C A R T</span>
    <br/><br/>    <br/>
    </div>
    </Col>
  <Col md="4" className="categorycard">
    <div><img src = "assets/rasmalai.jpg" className = "categoryimg"/>
    <br/><br/>
    <span style = {{margin:"10%"}}>P A S T A</span><p/>
    <span style = {{margin:"10%"}}>FROM 150/-</span>
    <span className = "addtocart">A D D&nbsp;&nbsp;&nbsp;T O&nbsp;&nbsp;&nbsp;C A R T</span>
    <br/><br/>    <br/>
    </div>
    </Col>
    
</Row>
<br/><br/>
<center style = {{background:"none"}}>
<Link to = "/cart" style = {{textDecoration:"none",background:"none"}}>
<span className = "addtocart">V I E W&nbsp;&nbsp;&nbsp;O U R&nbsp;&nbsp;&nbsp;M E N U</span></Link>
</center>
    </Container>
<br/><br/><br/><br/>
    <Carousel  style={{background:"none"}}>
    {dish}
    </Carousel>
 <div id = "reviews">
  
 <br/><br/><br/><br/>
 <Container style = {{background:"none"}}>
<span id = "reviewhead">The best food <br/>in Delhi!</span>
<br/><br/>
<div id = "subreviewhead">
Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....
</div>
<br/><br/>
{reviews}
 </Container>
 <br/><br/><br/><br/>
 <Container>
 <br/>
<Row>
<Col md='4'>
<img src="assets/cart.webp" style = {{background:"none"}}/>
<span className = "payment">Pick a dish
</span>
</Col>
<Col md='4'>
<img src="assets/coin.webp" style = {{background:"none"}}/>
<span className = "payment">Make a payment
</span>
</Col>
<Col md='4'>
<img src="assets/food.webp" style = {{background:"none"}}/>
<span className = "payment">Recieve your food!</span>


</Col>

</Row>
<br/><br/>
</Container>
 </div>
 </div>






</>
  );
}



export default App
