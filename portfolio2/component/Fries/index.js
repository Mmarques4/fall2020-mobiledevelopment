import React, { useReducer, useRef } from 'react';

let initialState = {

  friesPrice: 0,

  food: {
    name: "Fries of your choice!",
    price: 5,
    topping: []
  },
  //you can add fries
  store: [
    { id: 1, name: "Crinkle Cut", price: 1 },
    { id: 2, name: "Curly Fries", price: 2 },
    { id: 3, name: "Bacon Cheese Fries", price: 3},
  ]
};


function Reducer (state, action) {
  switch (action.type) {
    //remove toppins
    case "REMOVE_FRIES":
      return {
       
        ...state,
        friesPrice: state.friesPrice - action.item.price,
        food: 
        { ...state.food, topping: state.food.topping.filter((x) => x.id !== action.item.id)},
        store:
        [...state.store, action.item]
      };
 
    case "ADD_FRIES":
      return {
      
        ...state,
        friesPrice: state.friesPrice + action.item.price,
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
    dispatch({ type: 'REMOVE_FRIES', item });
  }
  
  const addfries = (item) => {
    dispatch({ type: 'ADD_FRIES', item })
  }
  
  <input ref={inputRef} />

  return (
      <div className="combo">
        <h2>{state.food.name}</h2>
        <p>Regular Fries: $ {state.food.price}</p>

        <div className="content">
          <h4>Choose your favorite Fries: </h4>
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
                    onClick={() => addfries(item)}
                    className="button"> Add </button>
                </li>
              ))}
            </ul>
            ) : <p>Thank you for placing your order! Please do not forget to tip :) </p>
          }
        </div>

        <div className="content">
        <h2>
          Total Order Amount: $ {state.food.price + state.friesPrice}
        </h2>
      </div>
      </div>
    </div>
  );
}

export default App;