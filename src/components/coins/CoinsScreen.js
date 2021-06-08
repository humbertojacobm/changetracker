import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Http from '../../libs/http';

class CoinsScreen extends Component{

  componentDidMount = async () => {
    const coins = await Http.instance.get("https://api.coinlore.net/api/tickers/");
    console.log("to-do-hmori:CoinsScreen:componentDidMount: coins", coins);
  }

  handlePress = () => {
    console.log("to-do-hmori:CoinsScreen:handlePress");
    this.props.navigation.navigate('CoinDetail');
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Coins Screen
        </Text>
        <Pressable style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>
            Ir a detail
          </Text>          
        </Pressable>
      </View>
    );
  }

}

export default CoinsScreen;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor:"red",    
  },
  titleText:{
    color:"#fff",
    textAlign: "center"
  },
  btn: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: "#fff",
    textAlign: "center"
  }
});