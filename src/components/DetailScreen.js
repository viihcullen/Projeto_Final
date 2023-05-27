import {Component} from 'react';
import { Button, View, Text } from 'react-native'; 

class DetailScreen extends Component{
    static navigationOptions = { 

        title: 'Detalhes' 
    
      }; 
    
      render() { 
    
        return ( 
    
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
    
            <Text>Detalhes</Text> 
    
            <Button 
    
              title="Mostrar detalhes novamente" 
    
              onPress={() => this.props.navigation.push('DetailScreen')} 
    
            /> 
    
            <Button 
    
              title="Ir para listar" 
    
              onPress={() => this.props.navigation.navigate('ListScreen')} 
    
            /> 
    
            <Button 
    
              title="Voltar" 
    
              onPress={() => this.props.navigation.goBack()} 
    
            /> 
    
          </View> 
    
        ); 
    
      } 

}
export default DetailScreen;