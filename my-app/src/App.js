import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/data.json";
import TeeItem from "./components/BakeryItem";
import SideNavBar from "./components/SideNavBar";
import {addToCart, resetCart} from "./components/Cart";
// import sortedBakeryData from "./components/SideNavBar";


// Referenced to fix default error: https://stackoverflow.com/questions/71112113/react-js-export-problems-possible-exports-default
// Reference: This code came with the react lab setup
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [sortedBakeryData, setSortedBakeryData] = useState(bakeryData);
  

  // Reference: Self-citation from React Lab 
//   const addToCart = (item) => {
//       const updatedCart = [...cart];
//       const oldItem = updatedCart.find((tee) => tee.name === item.name);

//       if (!oldItem) {
//           let newItem = { ...item, count: 1 };
//           updatedCart.push(newItem);
//       } else {
//           oldItem.count++;
//       }
//       setCartTotal(cartTotal + item.price);
//       setCart(updatedCart);
//   };

  // office hours help!
//   useEffect(() => {
//     console.log("useeffect");
//     console.log(sortedBakeryData);
//   }, [sortedBakeryData, setSortedBakeryData]);

  

  return (
      <div className="App">
          <h1>Sandy's Tanks & Tees</h1>
          
          <div className="display">
              <div className="container">
                  
                        <SideNavBar
                            setSortedBakeryData={setSortedBakeryData}
                            >
                            {/* key={index}
                            item={item}
                            setSortOrder={setSortOrder}
                            selectedSizes={selectedSizes}
                            setSelectedSizes={setSelectedSizes}
                            selectedColors={selectedColors}
                            setSelectedColors={setSelectedColors} */}
                        </SideNavBar>
                
                        <h4>View Cart Below!</h4>
                    <div className="shopping-area">          
                        <div className="tee-item">
                        
                            {sortedBakeryData.map((item, index) => (
                                <TeeItem
                                    key={index}
                                    item={item}
                                    addToCart={() => addToCart(cart, setCart, cartTotal, setCartTotal, item)}
                                />
                            ))}
                        </div>
                    </div>

                    
              
              </div>
              <div className="cart">
                        <h2>Cart</h2>
                        {cart.map((item, index) => (
                            <p key={index}>
                                {item.count}x {item.name}
                            </p>
                        ))}
                        <p className="total">Total: ${cartTotal.toFixed(2)}</p>
                        {/* <p className="item-count">Item Count: {cart.size()}</p> */}
                        <button className="reset"onClick={() => resetCart(setCart, setCartTotal)}>Reset Cart</button>
                    </div>
          </div>
      </div>
  );
}

export default App;



