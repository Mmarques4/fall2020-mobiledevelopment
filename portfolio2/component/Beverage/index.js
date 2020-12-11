import React, { useReducer, useRef } from 'react';

let initialState = {

  beveragesPrice: 0,

  food: {
    name: "Choose your Favorite Beverage",
    price: 0,
    topping: []
  },
  //you can add beverages
  store: [
    { id: 1, name: "Coke", price: 3 },
    { id: 2, name: "Sprite", price: 3 },
    { id: 3, name: "Dr. Pepper", price: 3 },
  ]
};


function Reducer (state, action) {
  switch (action.type) {
    //remove toppins
    case "REMOVE_BEVERAGE":
      return {
       
        ...state,
        beveragesPrice: state.beveragesPrice - action.item.price,
        food: 
        { ...state.food, topping: state.food.topping.filter((x) => x.id !== action.item.id)},
        store:
        [...state.store, action.item]
      };
 
    case "ADD_BEVERAGE":
      return {
      
        ...state,
        beveragesPrice: state.beveragesPrice + action.item.price,
        food: 
        { ...state.food, topping: [...state.food.topping, action.item] },
        store: 
        state.store.filter((x) => x.id !== action.item.id)
      }
      
    default:
      return state;
  }
}

const App = () => {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  const removeToppings = (item) => {
    dispatch({ type: 'REMOVE_BEVERAGE', item });
  }
  
  const addbeverages = (item) => {
    dispatch({ type: 'ADD_BEVERAGE', item })
  }
  
  <input ref={inputRef} />

  return (
      <div className="combo">
        <h2>{state.food.name}</h2>
        <p>Beverage: $ {state.food.price}</p>

        <div className="content">
          <h4>Choose your 2 Liter Bottle: </h4>
          {state.food.topping.length ? 
            (
              <ul>
                {state.food.topping.map((item) => (
                  <li key={item.id}> 
                    {' '} {item.name}
                    <button
                      onClick={() => removeToppings(item)}
                      className="button"> Remove <br></br>
                    </button>
                  </li>
                ))}
              </ul>
            ) : <p/>
          }
      
      </div>

      <div className="combo">
        <div className="content">
          {state.store.length ? 
            (
            <ul>
              {state.store.map((item) => (
                <li key={item.id}>
                  {item.name} (+ ${item.price})
                  <button
                    onClick={() => addbeverages(item)}
                    className="button"> Add </button>
                </li>
              ))}
            </ul>
            ) : <p>Thank you for placing your order! Please do not forget to tip :) </p>
          }
        </div>

        <div className="content">
        <h2>
          Total Order Amount: $ {state.food.price + state.beveragesPrice}
        </h2>
      </div>
      </div>
    </div>
  );
}

export default App;