import { Button, Divider } from 'react-native-elements';
import React, { useState , Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';

class VotingApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Result: ''
    };
  }

  handleClickfirst = () => {
   this.setState({ result: 'Hunger Games'});
  }
  handleClicksecond = () => {
   this.setState({ result: 'Harry Potter'});
  }
  handleClickthird = () => {
  this.setState({ result: 'Twilight'});
  }

    render(){
      const {result} = this.state;
      return(
        <View>
          <Text> <h1><b>Vote for the BEST Movie Sagas!</b></h1>  </Text> <br/>
          
        <Text><b>Hunger Games</b></Text>
        <View>
          <Button
             onPress={this.handleClickfirst}
           title="Vote"
          />
          </View>
          <Text> <b>Harry Potter</b></Text>
          <View>
          <Button
             onPress={this.handleClicksecond}
           title="Vote"
          />
          </View>
           <Text><b>Twilight</b></Text>
           <View>
          <Button
             onPress={this.handleClickthird}
           title="Vote"
          />
          </View>
          <Divider  />
          <Text ><br/><b>Your Answer:</b></Text><Text style={styles.headerText}> {result} </Text>
        </View> 
        );
    }
}
export default VotingApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
