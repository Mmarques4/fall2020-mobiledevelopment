import React, { useReducer, useRef } from 'react';

let initialState = {

  saucePrice: 0,

  food: {
    name: "Wings of your Choice",
    price: 15,
    topping: []
  },
  //you can add sauce
  store: [
    { id: 1, name: "Barbecue", price: 4 },
    { id: 2, name: "Parmesan Garlic Sauce", price: 2 },
    { id: 3, name: "Mild Buffalo Sauce", price: 2},
  ]
};


function Reducer (state, action) {
  switch (action.type) {
    //remove toppins
    case "REMOVE_SAUCE":
      return {
       
        ...state,
        saucePrice: state.saucePrice - action.item.price,
        food: 
        { ...state.food, topping: state.food.topping.filter((x) => x.id !== action.item.id)},
        store:
        [...state.store, action.item]
      };
 
    case "ADD_SAUCE":
      return {
      
        ...state,
        saucePrice: state.saucePrice + action.item.price,
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
    dispatch({ type: 'REMOVE_SAUCE', item });
  }
  
  const addsauce = (item) => {
    dispatch({ type: 'ADD_SAUCE', item })
  }
  
  <input ref={inputRef} />

  return (
      <div className="combo">
        <h2>{state.food.name}</h2>
        <p>Plain Wings: $ {state.food.price}</p>

        <div className="content">
          <h4>Add Sauce to your Wings: </h4>
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
                    onClick={() => addsauce(item)}
                    className="button"> Add </button>
                </li>
              ))}
            </ul>
            ) : <p>Thank you for placing your order! Please do not forget to tip :) </p>
          }
        </div>

        <div className="content">
        <h2>
          Total Order Amount: $ {state.food.price + state.saucePrice}
        </h2>
      </div>
      </div>
    </div>
  );
}

export default App;