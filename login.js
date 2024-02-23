import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'black', width: '100%', height: 90 }}>
        <Text style={{fontSize:7, fontStyle: 'italic',}}>Página de Login</Text>
      </View>


      <View style={styles.secondaryContainer}>

        <Text style={[styles.title, { fontSize: 40, textAlign: 'center' }]}>Login</Text>

        <View style={styles.terciaryContainer}>
          <TextInput style={styles.InputName}
            placeholder='Seu Nome'
          />
          <TextInput style={styles.InputName}
            placeholder='Sua Senha'
            secureTextEntry={true}
          />
        </View>

      </View>

      <View style={{ backgroundColor: 'black', width: '100%', height: 60 }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  secondaryContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green',
    justifyContent: 'center',

  },

  terciaryContainer: {
    padding: 30,
    backgroundColor: 'grey',
  },

});