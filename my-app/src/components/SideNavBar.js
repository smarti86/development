import { useState } from "react";
import bakeryData from "../assets/data.json";

export default function SideNavBar(props){
    
    const [sortOrder, setSortOrder] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    
   
    // Reference: https://react.dev/learn/thinking-in-react
    // Focused on their section for the SearchBar and the addition of the onChange event handlers that set the parent state from them 
    // and found the section "e.target.value" helpful
    // Also for further clarity, took a peek at https://stackoverflow.com/questions/45624780/e-target-value-on-an-input-field-reactjs-how-does-it-work 
    const handleSizeChange = (sizeEvent) => {
        console.log("suiiiz")


        if(sizeEvent.target.checked){
        setSelectedSizes([...selectedSizes, sizeEvent.target.value])
        }
        else{
        setSelectedSizes(selectedSizes.filter((s) => s !== sizeEvent.target.value))
        }
        setNewData()


    };

    // Same reference as the one directly above
    const handleColorChange = (colorEvent) => {
        if(colorEvent.target.checked){
        setSelectedColors([...selectedColors, colorEvent.target.value])
        }
        else{
        setSelectedColors(selectedColors.filter((c) => c !== colorEvent.target.value))
        }

       setNewData()
    };

    // Same reference as the one above
    const handleSortChange = (sortingEvent) => {
        console.log("helfhskj")
        setNewData()

        setSortOrder(sortingEvent.target.value);

    };

    const comparePrices = (teeOne, teeTwo) => {
        if (sortOrder === 'priceLowToHigh') {
            return teeOne.price - teeTwo.price;
        } else if (sortOrder === 'priceHighToLow') {
            return teeTwo.price - teeOne.price;
        } else if (sortOrder === 'reset') {
            return 0;
        } else {
            return 0; 
        }
    };


    // Referenced to flesh out idea on how to have both filters apply at the same time: https://retool.com/blog/filtering-data-in-react-filter-map-and-for-loops
    // Referenced: https://stackoverflow.com/questions/37141425/filter-return-true-or-false
  

    // filters data and sets the sortedBakeryData
    function setNewData(){
        const filteredData = bakeryData.filter(item => {
            if (selectedSizes.length > 0 && !selectedSizes.includes(item.size)) {
            return false;
            }
            if (selectedColors.length > 0 && !selectedColors.includes(item.color)) {
            return false;
            }
            return true;
        });

        const sortedBakeryData = filteredData.sort(comparePrices);
        props.setSortedBakeryData(sortedBakeryData);
    }

    //setNewData()



    

return( 
        <div>
            {/* Reference: https://react.dev/reference/react-dom/components/select */}
              <div className="price-sorting">
                <select onChange={() => handleSortChange}>
                    <option value="">Sort by Price</option>
                    <option value="priceLowToHigh">Low to High</option>
                    <option value="priceHighToLow">High to Low</option>
                    <option value="reset">Reset</option>
                </select>
              </div>

              {/* Reference for checkbox idea: https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */}
              {/* and to cement my understanding: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox */}
              {/* Reference to handle onChange for checkbox: https://stackoverflow.com/questions/4471401/getting-value-of-html-checkbox-from-onclick-onchange-events */}
              <div className="size-filter">
                <h4>Size Filter:</h4>
                  <label>
                    <input type="checkbox" value="S" onChange={handleSizeChange} />
                      Small
                    <span class="checkmark"></span>
                  </label>
                  <label>
                    <input type="checkbox" value="M" onChange={handleSizeChange} />
                      Medium
                    <span class="checkmark"></span>
                  </label>
                  <label>
                   <input type="checkbox" value="L" onChange={handleSizeChange} />
                      Large
                    <span class="checkmark"></span>
                  </label>
              </div>

              {/* Same as above for size filter: Reference for checkbox idea: https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */}
              {/* Reference to handle onChange for checkbox: https://stackoverflow.com/questions/4471401/getting-value-of-html-checkbox-from-onclick-onchange-events */}
              <div className="color-filter">
                <h4>Color Filter:</h4>
                  <label>
                    <input type="checkbox" value="White" onChange={handleColorChange} />
                      White
                    <span class="checkmark"></span>
                  </label>
                  <label>
                    <input type="checkbox" value="Yellow" onChange={handleColorChange} />
                    Yellow
                    <span class="checkmark"></span>
                  </label>
                  <label>
                    <input type="checkbox" value="Red" onChange={handleColorChange} />
                      Red
                    <span class="checkmark"></span>
                  </label>
                  <label>
                    <input type="checkbox" value="Green" onChange={handleColorChange} />
                      Green
                    <span class="checkmark"></span>
                  </label>
                  <label>
                    <input type="checkbox" value="Blue" onChange={handleColorChange} />
                      Blue
                    <span class="checkmark"></span>
                  </label>
                  <label>
                    <input type="checkbox" value="Brown" onChange={handleColorChange} />
                      Brown
                    <span class="checkmark"></span>
                  </label>
                  <label>
                    <input type="checkbox" value="Gray" onChange={handleColorChange} />
                      Gray
                    <span class="checkmark"></span>
                  </label>
              </div>
              
          </div>

)
}