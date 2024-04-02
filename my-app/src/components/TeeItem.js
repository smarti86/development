import { useState } from "react";

// collaborated with other students in section to discuss ideas, structures, strategies. Forgot to collect their names srry
export default function TeeItem(props) {
    const item = props.item
    function cartAdd() {
        const updateCard = [...props.card]
        const oldCard = updateCard.find((x) => x.name === item.name)

        // incorporated ideas from TAs on Friday lab, namely the ...item line
        if(!oldCard){
            let newCard = {...item, count:1}
            updateCard.push(newCard)
        }
        else {
            oldCard.count++;
        }
        props.setCardTotal(props.cardTotal + item.price)
        props.setCard(updateCard)
    }


    return (<div class="product-info">
        <div class="BakeryItem">
                
                <img class="bakery-item-image" src={item.image}/>
                <div class="item">
                    <div class="bakery-item-text">
                        <h2 class="bakery-item-label">{item.name}</h2>
                        <p class="bakery-item-description">{item.description}</p>
                        <p class="price">${item.price}</p>
                        <button onClick={cartAdd} class="button">Add to Cart</button>
                    </div>
                </div>
            
        </div>

                
            
        </div>

    );
}