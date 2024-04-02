import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/data.json";
import TeeItem from "./components/TeeItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

    const [card, setCard] = useState([]);
    const [cardTotal, setCardTotal] = useState(0)

  // Citation: TrueQ's ReactJS: How to work with Map in useState hook
  // const updateCard = (key, value) => {
  //   setCard(prevCard => new Map(map.set(key, value)));
  // }

  // Citation: Watched https://www.youtube.com/watch?v=tEMrD9t85v4&ab_channel=PedroTech 
  // helpful but ultimately went off of my notes from section and the slides
  return (
    <div className="App">
      <div>

        <h1>Sandy's Bakery</h1> {}
        <div class="display">

          <div class="container">
            <div class="bakery-item">
              {bakeryData.map((item, index) => ( 
                <TeeItem 
                card={card}
                setCard={setCard}
            
                cardTotal={cardTotal}
                setCardTotal={setCardTotal}

                item={item}
                id={index} 
                key={index}
                />
              ))
              }
              </div>
        
            <div class="cart">
              <h2>Cart</h2>
              {card.map((item,index) => (
                <p key={index}>
                  {item.count}x {item.name}
                </p>
              ))
              } 
              
            <p class="total">${cardTotal.toFixed(2)}</p>
            </div>
            </div>
            </div>

      </div>
    
      </div>
  );
}

export default App;