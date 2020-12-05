import React, { useReducer, useRef } from 'react';
import './App.css';

// Create a 'initialtState' object 
const initialState = {
  // Create a global state to be shared across the application
  //products array is empty to track items in store
  additionalPrice: 0,
  pet: {
    price: 150,
    name: "Adopt a Dog",
    products: []
  },
  //array list of items in the store the user can add/remove for 'products' array
  store: [
    { id: 1, name: "Collar & Leash", price: 50 },
    { id: 2, name: "Pet Bed", price: 80 },
    { id: 3, name: "Grooming Brush", price: 30 },
    { id: 4, name: "Toy Bundle", price: 30 }
  ]
};

// Create a "reducer" function
const reducer = (state, action) => {
  switch (action.type) {
    //removal of item after adding it
    case "REMOVE_ITEM":
      return {
        //update the total amount by removing the item price from the updated price
       // reduce the additionalPrice and return item to the store
        ...state,
        additionalPrice: state.additionalPrice - action.item.price,
        pet: { ...state.pet, products: state.pet.products.filter((x) => x.id !== action.item.id)},
        store: [...state.store, action.item]
      };
      //adding item
    case "BUY_ITEM":
      return {
        //update the total amount by adding the item price from the updated price
         //increase the additionalPrice and remove the item from the store
        ...state,
        additionalPrice: state.additionalPrice + action.item.price,
        pet: { ...state.pet, products: [...state.pet.products, action.item] },
        store: state.store.filter((x) => x.id !== action.item.id)
      }
    default:
      return state;
  }
}

const App = () => {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const removeProduct = (item) => {
    dispatch({ type: 'REMOVE_ITEM', item });
  }
  
  const buyItem = (item) => {
    dispatch({ type: 'BUY_ITEM', item })
  }
  
  //button for removeProduct (x button) using dispatch function
    //button for addItem (Add button) using dispatch function
  return (
      <div className="box">
        <h2>{state.pet.name}</h2>
        <p>Adoption Fee: ${state.pet.price}</p>
        <div className="content">
          <h4>Additional Items:</h4>
          {state.pet.products.length ? 
            (
              <ol type="1">
                {state.pet.products.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => removeProduct(item)}
                      className="button">X
                    </button>
                    {item.name}
                  </li>
                ))}
              </ol>
            ) : <p>Add items to purchase when adopting.</p>
          }
      
      </div>

      <div className="box">
        <div className="content">
          <h4>Additional Items</h4>
          {state.store.length ? 
            (
            <ol type="1">
              {state.store.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => buyItem(item)}
                    className="button">Add</button>
                  {item.name} (+{item.price})
                </li>
              ))}
            </ol>
            ) : <p>Thank you for adopting!</p>
          }
        </div>

        <div className="content">
        <h4>
          Total Amount: ${state.pet.price + state.additionalPrice}
        </h4>
      </div>
      </div>
    </div>
  );
}

export default App;