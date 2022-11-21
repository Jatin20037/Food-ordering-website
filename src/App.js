import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App2 from './app2.js';
import Cart from './cart.js';
import Category from './category.js';
import {useState} from 'react';

function Caller(){
  
  const[sharedata,setSharedata] = useState({});
  console.log(sharedata);
return(
  
  <BrowserRouter>
<Routes>

  <Route path="/" element={<App2 />}></Route>
  <Route path="/cart/:name" element={<Cart/>}></Route>
  <Route path="/cart" element={<Category />}></Route>
</Routes>
  </BrowserRouter>
 
)
}export default Caller