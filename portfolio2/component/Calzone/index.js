import React, { useReducer, useRef } from 'react';

let initialState = {

  calzonesPrice: 0,

  food: {
    name: "Calzones of your choice",
    price: 8.25,
    topping: []
  },
  //you can add calzones
  store: [
    { id: 1, name: "Cheese", price: 2 },
    { id: 2, name: "Meatball", price: 5 },
    { id: 3, name: "Chicken", price: 3.5},
  ]
};


function Reducer (state, action) {
  switch (action.type) {
    //remove toppins
    case "REMOVE_CALZONES":
      return {
       
        ...state,
        calzonesPrice: state.calzonesPrice - action.item.price,
        food: 
        { ...state.food, topping: state.food.topping.filter((x) => x.id !== action.item.id)},
        store:
        [...state.store, action.item]
      };
 
    case "ADD_CALZONES":
      return {
      
        ...state,
        calzonesPrice: state.calzonesPrice + action.item.price,
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
    dispatch({ type: 'REMOVE_CALZONES', item });
  }
  
  const addcalzones = (item) => {
    dispatch({ type: 'ADD_CALZONES', item })
  }
  
  <input ref={inputRef} />

  return (
      <div className="combo">
        <h2>{state.food.name}</h2>
        <p>Calzones: $ {state.food.price}</p>

        <div className="content">
          <h4>Choose your favorite: </h4>
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
                    onClick={() => addcalzones(item)}
                    className="button"> Add </button>
                </li>
              ))}
            </ul>
            ) : <p>Thank you for placing your order! Please do not forget to tip :) </p>
          }
        </div>

        <div className="content">
        <h2>
          Total Order Amount: $ {state.food.price + state.calzonesPrice}
        </h2>
      </div>
      </div>
    </div>
  );
}

export default App;