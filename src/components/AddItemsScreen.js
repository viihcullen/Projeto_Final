import React, { Component } from 'react'; 
import { Button, View, Text, StyleSheet  } from 'react-native'; 

 
 

class AddItemsScreen extends Component { 

  static navigationOptions = { 

    title: 'Adicionar', 

  }; 

  render() { 

    return ( 

      <View style={styles.container}> 

      <View style={styles.botao}>
      <Button 
          color="#8C60C6"
          title="Mostrar adicionar novamente" 

          onPress={() => this.props.navigation.push('AddBoard')} 

        /> 

        <Button 
          color="#8C60C6"
          title="Ir para listar" 

          onPress={() => this.props.navigation.navigate('ListScreen')} 

        /> 

        <Button 
          color="#8C60C6"
          title="Voltar" 

          onPress={() => this.props.navigation.goBack()} 

        /> 
      </View>

        

        

      </View> 

    ); 

  } 

} 
const styles = StyleSheet.create({ 

  container:{ 
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',


  }, 
  botao:{
    width: 'auto',
    

  }
}); 
export default AddItemsScreen; 