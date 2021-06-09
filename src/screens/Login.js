import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const authenticate = async () => {
        // authenticate user from api
        try {
            const response = await axios.post('http://localhost:3000/api/login',
                {
                    username,
                    password,
                }
            );
            console.log(response.data.data);
            Toast.show({
                text1: `Hello ${response.data.data.name} 👋`,
                text2: 'Ready to HOPin?'
            });
            navigation.navigate('Home', {
                userData: response.data.data,
            });
        } catch (error) {
            Toast.show({
                text1: `Invalid User credentials 😳`,
                text2: 'Please try again',
                type: 'error',
            });
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#2D3436', flex: 1 }}>
            <View style={styles.container}>
                {/* Welcome box */}
                <View style={styles.welcomeBox}>
                    <Text style={styles.welcomeText}>Welcome to HOPin 🤙</Text>
                </View>
                {/* Form */}
                <View>
                    <View style={{ marginBottom: 22, }}>
                        <Text style={styles.inputHeader}>Username</Text>
                        <TextInput
                            placeholder="Username"
                            style={styles.input}
                            onChangeText={setUsername}
                            autoCapitalize='none'
                        ></TextInput>
                    </View>
                    <View>
                        <Text style={styles.inputHeader}>Password</Text>
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            onChangeText={setPassword}
                            autoCapitalize='none'
                        ></TextInput>
                    </View>
                </View>
            </View>
            {/* Login Button */}
            <TouchableOpacity
                style={styles.login}
                onPress={authenticate}
            >
                <Text
                    style={{ color: "#fff", fontSize: 30, fontWeight: 'bold', }}
                >Login 👉</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    welcomeBox: {
        backgroundColor: '#72B5A8',
        paddingHorizontal: 20,
        paddingVertical: 89,
        borderRadius: 10,
        marginTop: 115,
        marginBottom: 60,
    },
    welcomeText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputHeader: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: 12,
    },
    input: {
        backgroundColor: '#72B5A8',
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#3C796D',
        paddingHorizontal: 6,
        paddingVertical: 10,
    },
    login: {
        backgroundColor: '#3C796D',
        borderRadius: 5,
        alignSelf: 'center',
        bottom: 0,
        paddingHorizontal: 50,
        paddingVertical: 11,
    }
})

export default Login;
