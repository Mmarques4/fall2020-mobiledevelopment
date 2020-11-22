import React, { useState, useEffect }  from "react";
import { Text, View, Button } from 'react-native';

export default function Trackers() {

  let [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Count is ${counter}`;
  }, [counter]);

  return (
    <View>
      <Text><b>Count:{counter} </b></Text> <br></br>

      <View>
        <Button title="Increase" 
        onPress={() => {setCounter(counter + 1)} }
        />
      </View>

      <View>
          <Button title="Decrease" 
          onPress={() => {setCounter(counter - 1)} }
          />
      </View>

      <View style={{ flex: 1}}>
        <Button title="Reset" 
        onPress={() => {setCounter(counter = 0)} } 
        />
      </View>
    </View>
  );
}