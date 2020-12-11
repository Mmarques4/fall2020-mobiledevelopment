import React, { useReducer, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

let initialState = {

  toppingsPrice: 0,

  food: {
    name: "Pizza under $20",
    price: 10,
    topping: []
  },
  //you can add toppings
  store: [
    { id: 1, name: "Pepperoni", price: 4 },
    { id: 2, name: "Tomatoes", price: 2 },
    { id: 3, name: "More Cheese", price: 2},
  ]
};


function Reducer (state, action) {
  switch (action.type) {
    //remove toppins
    case "REMOVE_TOPPINGS":
      return {
        
        ...state,
        toppingsPrice: state.toppingsPrice - action.item.price,
        food: 
        { ...state.food, topping: state.food.topping.filter((x) => x.id !== action.item.id)},
        store:
        [...state.store, action.item]
      };
 
    case "ADD_TOPPINGS":
      return {
      
        ...state,
        toppingsPrice: state.toppingsPrice + action.item.price,
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
    dispatch({ type: 'REMOVE_TOPPINGS', item });
  }
  
  const addtoppings = (item) => {
    dispatch({ type: 'ADD_TOPPINGS', item })
  }
  
  <input ref={inputRef} />
  
  return (
      <div className="combo">
        <h2>{state.food.name}</h2>
        <p>Regular Cheese Pizza: $ {state.food.price}</p>

        <div className="content">
          <h4>Add additional toppings to your pizza: </h4>
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
                    onClick={() => addtoppings(item)}
                    className="button"> Add </button>
                </li>
              ))}
            </ul>
            ) : <p>Thank you for placing your order! Please do not forget to tip :) </p>
          }
        </div>

        <div className="content">
        <h2>
          Total Order Amount: $ {state.food.price + state.toppingsPrice}
        </h2>
      </div>
      </div>
    </div>
  );
}

export default App;

const styles = StyleSheet.create({
  
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  headerText1: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: 'black',
    fontFamily: 'cambria',
  },

  buttonContainer: {
    backgroundColor: '#E2E3FB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'black',
    borderColor: '#A950FC',
    borderWidth: 4,
    width: 100,
    height: 80, 
 },
});