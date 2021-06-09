import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,

} from 'react-native';
import DropDown from '../components/DropDown';
import CustomDataTimePicker from '../components/CustomDataTimePicker';
import Counter from '../components/Counter';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const GOVERNORATES = ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"];
const ROADS = ["Geish Road", "International Coastal Road", "Cairo - Alexandria Desert Road", "Ring Road", "Regional Ring Road"];

const CreateRide = ({ route, navigation }) => {
    const { userData } = route.params;

    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [road, setRoad] = useState("");
    const [passengers, setPassengers] = useState(0);
    const [date, setDate] = useState(new Date(1598051730000));
    const [time, setTime] = useState(new Date(1598051730000));

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/api/user/${userData.id}/ride`,
                {
                    source,
                    destination,
                    road,
                    numOfPassengers: passengers,
                    date,
                    time,
                }
            );
            console.log(response.data.data);
            Toast.show({
                text1: `Ride submitted successfully 👋`,
            });
            navigation.navigate('Home');
        } catch (error) {
            Toast.show({
                text1: `Oops, an error occured😳`,
                text2: 'Please try again',
                type: 'error',
            });
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#2D3436', flex: 1 }}>
            <View style={styles.container}>
                <Text
                    style={{ alignSelf: 'center', color: '#959595', marginVertical: 10, }}
                >RIDE DETAILS</Text>
                {/* Form */}
                <ScrollView>
                    <DropDown
                        name="Ride Source 🛫"
                        list={GOVERNORATES}
                        selectedItem={source}
                        setSelectedItem={setSource}
                    />
                    <DropDown
                        name="Ride Destination 🛬"
                        list={GOVERNORATES}
                        selectedItem={destination}
                        setSelectedItem={setDestination}
                    />
                    <DropDown
                        name="Travel Road 🛣️"
                        list={ROADS}
                        selectedItem={road}
                        setSelectedItem={setRoad}
                    />
                    <Counter
                        name="Available Passengers 💺"
                        count={passengers}
                        setCount={setPassengers}
                    />
                    <CustomDataTimePicker
                        name="Date 🗓️"
                        type="date"
                        date={date}
                        setDate={setDate}
                    />
                    <CustomDataTimePicker
                        name="Time ⏰"
                        type="time"
                        date={time}
                        setDate={setTime}
                    />
                </ScrollView>
            </View>
            {/* CreateRide Button */}
            <TouchableOpacity
                style={styles.CreateRide}
                onPress={handleSubmit}
            >
                <Text
                    style={{ color: "#fff", fontSize: 30, fontWeight: 'bold', }}
                >Submit 👍</Text>
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
    CreateRide: {
        backgroundColor: '#3C796D',
        borderRadius: 5,
        alignSelf: 'center',
        bottom: 0,
        paddingHorizontal: 50,
        paddingVertical: 11,
    }
})

export default CreateRide;
