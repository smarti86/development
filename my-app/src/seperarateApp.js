import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/data.json";
import TeeItem from "./components/BakeryItem";
// import SideNavBar from "./components/SideNavBar";
// import sortedBakeryData from "./components/SideNavBar";


// Referenced ro fix default error: https://stackoverflow.com/questions/71112113/react-js-export-problems-possible-exports-default

// Reference: This code came with the react lab setup
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  

  // Reference: Self-citation from React Lab 
  const addToCart = (item) => {
      const updatedCart = [...cart];
      const oldItem = updatedCart.find((tee) => tee.name === item.name);

      if (!oldItem) {
          let newItem = { ...item, count: 1 };
          updatedCart.push(newItem);
      } else {
          oldItem.count++;
      }
      setCartTotal(cartTotal + item.price);
      setCart(updatedCart);
  };

  

  return (
      <div className="App">
          <h1>Sandy's Tanks & Tees</h1>
          
          <div className="display">
              <div className="container">
                  <div className="bakery-item">
                      {sortedBakeryData.map((item, index) => (
                          <TeeItem
                              key={index}
                              item={item}
                              addToCart={addToCart}
                          />
                      ))}
                  </div>
                  <div>
                    <SideNavBar>
                        key={index}
                        item={item}
        
                        setSortOrder={setSortOrder}
                        selectedSizes={selectedSizes}
                        setSelectedSizes={setSelectedSizes}
                        selectedColors={selectedColors}
                        setSelectedColors={setSelectedColors}
                    </SideNavBar>
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
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;