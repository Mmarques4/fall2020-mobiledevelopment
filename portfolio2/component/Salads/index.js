import React, { useReducer, useRef } from 'react';

let initialState = {

  saladsPrice: 0,

  food: {
    name: "Salads of your Choice",
    price: 0,
    topping: []
  },
  //you can add salads
  store: [
    { id: 1, name: "Buffalo Chicken Salad", price: 15 },
    { id: 2, name: "Chicken Garden Salad", price: 16 },
    { id: 3, name: "Caesar Salad", price: 12},
  ]
};


function Reducer (state, action) {
  switch (action.type) {
    //remove toppins
    case "REMOVE_SALADS":
      return {
       
        ...state,
        saladsPrice: state.saladsPrice - action.item.price,
        food: 
        { ...state.food, topping: state.food.topping.filter((x) => x.id !== action.item.id)},
        store:
        [...state.store, action.item]
      };
 
    case "ADD_SALADS":
      return {
      
        ...state,
        saladsPrice: state.saladsPrice + action.item.price,
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
    dispatch({ type: 'REMOVE_SALADS', item });
  }
  
  const addsalads = (item) => {
    dispatch({ type: 'ADD_SALADS', item })
  }
  
  <input ref={inputRef} />

  return (
      <div className="combo">
        <h2>{state.food.name}</h2>
        <p>Salad: $ {state.food.price}</p>

        <div className="content">
          <h4>Add your favorite salad: </h4>
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
                    onClick={() => addsalads(item)}
                    className="button"> Add </button>
                </li>
              ))}
            </ul>
            ) : <p>Thank you for placing your order! Please do not forget to tip :) </p>
          }
        </div>

        <div className="content">
        <h2>
          Total Order Amount: $ {state.food.price + state.saladsPrice}
        </h2>
      </div>
      </div>
    </div>
  );
}

export default App;