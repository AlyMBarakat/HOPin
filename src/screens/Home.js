import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,

} from 'react-native';
import Road from '../components/Road'

const Home = ({ route, navigation }) => {
    const { userData } = route.params;


    return (
        <SafeAreaView style={{ backgroundColor: '#2D3436', flex: 1 }}>
            <View style={styles.container}>
                <Text
                    style={{ alignSelf: 'center', color: '#959595', marginVertical: 10, }}
                >UPCOMMING HOPINS</Text>
                <ScrollView>
                    <Road />
                    <Road />
                    <Road />
                    <Road />
                </ScrollView>
            </View>
            {/* Home Button */}
            <TouchableOpacity
                style={styles.Home}
                onPress={() => navigation.navigate("Create Ride", {
                    userData,
                })}
            >
                <Text
                    style={{ color: "#fff", fontSize: 50, fontWeight: 'bold', }}
                >+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    Home: {
        backgroundColor: '#3C796D',
        borderRadius: 100,
        alignSelf: 'flex-end',
        marginRight: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        position: 'absolute',
        zIndex: 9999,
        bottom: 35,
        right: 5,
    }
})

export default Home;
