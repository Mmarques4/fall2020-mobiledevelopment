import React, { useReducer, useRef } from 'react';
import './App.css';

const initialState = {

  toppingsPrice: 0,
  food: {
    price: 10,
    name: "Pizza under $20 - Customizable",
    topping: []
  },
  //you can add toppings
  store: [
    { id: 1, name: "Pepperoni", price: 4 },
    { id: 2, name: "Tomato", price: 2 },
    { id: 3, name: "Pineapple", price: 2},
  ]
};


const reducer = (state, action) => {
  switch (action.type) {
    //remove toppins
    case "REMOVE_TOPPINGS":
      return {
       
        ...state,
        toppingsPrice: state.toppingsPrice - action.item.price,
        food: { ...state.food, topping: state.food.topping.filter((x) => x.id !== action.item.id)},
        store: [...state.store, action.item]
      };
 
    case "ADD_TOPPINGS":
      return {
      
        ...state,
        toppingsPrice: state.toppingsPrice + action.item.price,
        food: { ...state.food, topping: [...state.food.topping, action.item] },
        store: state.store.filter((x) => x.id !== action.item.id)
      }
      
    default:
      return state;
  }
}

const App = () => {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const removeToppings = (item) => {
    dispatch({ type: 'REMOVE_TOPPINGS', item });
  }
  
  const addtoppings = (item) => {
    dispatch({ type: 'ADD_TOPPINGS', item })
  }
  
  return (
      <div className="bundle">
        <h2>{state.food.name}</h2>
        <p>Regular Cheese Pizza: ${state.food.price}</p>

        <div className="content">
          <h4>Add additional toppings to your pizza:</h4>
          {state.food.topping.length ? 
            (
              <ul type="1">
                {state.food.topping.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => removeToppings(item)}
                      className="button"> X <br></br>
                    </button>
                    {item.name}
                  </li>
                ))}
              </ul>
            ) : <p/>
          }
      
      </div>

      <div className="bundle">
        <div className="content">
          {state.store.length ? 
            (
            <ul type="1">
              {state.store.map((item) => (
                <li key={item.id}>
                  {item.name} (+ ${item.price})
                  <button
                    onClick={() => addtoppings(item)}
                    className="button">Add </button>
                </li>
              ))}
            </ul>
            ) : <p>Thank you for placing your order! Please do not forget to tip :) </p>
          }
        </div>

        <div className="content">
        <h2>
          Total Order Amount: ${state.food.price + state.toppingsPrice}
        </h2>
      </div>
      </div>
    </div>
  );
}

export default App;