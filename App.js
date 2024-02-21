import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'gray', width: '100%', height: 90 }}>

      </View>
      <View style={styles.secondaryContainer}>

{/*NOME*/}
        <Text style={{ color: '#0000FF', fontSize: 30, fontWeight: 'bold', textAlign: 'center', textAlign:'right', }}>Caio Felipe Vieira Ferreira</Text>

{/* NUMERO */}
        <Text style={{color: 'black', fontSize: 25, fontStyle: 'italic', textAlign: 'flex-start', alignItems: 'center', borderWidth: 1, borderColor: 'red', borderRadius: 25,}}>07</Text>

{/* NUMERO DA SALA */}
        <Text style={{ backgroundColor: '#FF00FF', color: 'black', fontSize: 20, textAlign: 'center', }}>Sala 7</Text>

{/* CAIXA ADCIONAL(IDADE) */}
        <Text style={{ borderWidth: 3, fontSize: 20, borderColor: '#00FF00', backgroundColor: '#4B0082', textAlign: 'center', color: 'white'  }}>Idade: 16 </Text>
      </View>

      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
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
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
  
});