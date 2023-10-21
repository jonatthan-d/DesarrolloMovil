import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    <SafeAreaView style={styles.container}>

        <View style={styles.Content}>

            <View>

                <View style={styles.arrow}>

                    <Image
                        source={{ uri: '..\..\assets\flecha-izquierda.png' }}
                        style={{ width: 50, height: 50, resizeMode: "cover" }}
                    />
                </View>

                <View style={styles.title}>
                    <Text>Sing up for  a</Text>
                    <Text>enw account</Text>
                </View>

                <View style={styles.spacing}>
                    <Text style={styles.lable}>We just need some more information</Text>
                </View>

                <View style={styles.spacing}>
                    <Text style={styles.lable}>Name</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="pink"
                        returnKeyType='next'
                    />
                </View>

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
                    <Text style={styles.lable}>Confrim Password</Text>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="pink"
                        placeholder='*********'
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.spacing}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.spacing, styles.row]}>
                <Text style={styles.lable}>already have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.LogIn}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Content: {
        flex: 1,
        backgroundColor: 'white',
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
    },
    spacing: {
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center"
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
    LogIn: {
        color: "pink",
        paddingLeft: 5,
    }


})