import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';



class EditItemsScreen extends Component {

  static navigationOptions = {

    title: 'Editar',

  };

  render() {

    return (

      <View style={styles.container}>

        <Text>Editar</Text>

        <View style={styles.botao}>
          <Button

            title="Ir para a edição novamente"
            color="#8C60C6"
            onPress={() => this.props.navigation.push('EditScreen')}

          />

          <Button

            title="Ir para listar"
            color="#8C60C6"
            onPress={() => this.props.navigation.navigate('ListScreen')}

          />

          <Button

            title="Voltar"
            color="#8C60C6"
            onPress={() => this.props.navigation.goBack()}

          />

        </View>


      </View>

    );

  }

}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',


  },
  botao: {
    width: 'auto',


  }
});
export default EditItemsScreen; 