import React, { Component } from 'react'; 
import { Button, View, Text, StyleSheet } from 'react-native'; 

  

class ListScreen extends Component { 

  static navigationOptions = { 

    title: '<listar>', 

  }; 

  render() { 

    return ( 

      <View style={styles.container}> 

        <Text>Texto</Text> 

        <Button 

          title="Detalhes" 

          onPress={() => this.props.navigation.navigate('DetailScreen')} 

        /> 

        <Button 

          title="Adicionar" 

          onPress={() => this.props.navigation.navigate('AddItemsScreen')} 

        /> 

        <Button 

          title="Editar" 

          onPress={() => this.props.navigation.navigate('EditItemsScreen')} 

        /> 

      </View> 

    ); 

  } 

} 

const styles = StyleSheet.create({ 

  container:{ 
    flex:1, 
    justifyContent: "center",
    backgroundColor: '#ECDFFC',


  }, 

 

}); 
export default ListScreen; 