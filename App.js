import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.firstSection}>

        <Image
          source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.7RaLYd4l0ZvvkGIkqBKtJAHaE8&pid=Api' }}
          style={{ width: "100%", height: "120%", resizeMode: "cover" }}
        />

        <View
          style={{ position: "absolute" }}
        >
          <Text style={styles.title}>Trvelo</Text>
        </View>
      </View>

      <View style={styles.secondSection}>

        <View>

          <View style={styles.spacing}>
            <Text style={styles.lable}>Email address</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder='ejemplo@ejemplo.com'
              keyboardType='email-address'
              returnKeyType='next'
            />
          </View>

          <View style={styles.spacing}>
            <Text style={styles.lable}>Password</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder='*********'
              secureTextEntry={true}
            />
          </View>

          <View style={styles.spacing}>
            <Text style={styles.lable}>Forgot Password?</Text>
          </View>

          <View style={styles.spacing}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={[styles.spacing, styles.row]}>
          <Text style={styles.lable}>Don´t have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUp}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: "100%",
  },
  secondSection: {
    flex: 2,
    backgroundColor: 'white',
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: "white"
  },
  lable: {
    color: "#ccc",
  },
  textInput: {
    color: "#000",
    padding: 8,
  },
  forgotPassword: {
    color: "Black",
    textAlign: "right"
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
  spacing: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  signUp: {
    color: "pink",
    paddingLeft: 5,
  }
});
