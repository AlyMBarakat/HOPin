import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';



const RideCard = ({ name = "Ahmed Khalid", car = "Mitsubishi Lancer 2017", road = "Desert Road", time = "9:30 AM", seatsLeft = "4", }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 7, fontSize: 14, color: "#fff", fontWeight: "bold", width: 70 }}>
                {time}
            </Text>
            <View style={styles.container}>
                <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>{name}</Text>
                <Text style={{ fontSize: 15, color: "#3C796D", fontWeight: "bold" }}>{car}</Text>
                <Text style={{ fontSize: 15, color: "#3C796D", fontWeight: "bold" }}>Seats left: {seatsLeft}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, color: "#3C796D", fontWeight: "bold" }}>{road}</Text>
                    {/* HOPin Button */}
                    <TouchableOpacity style={styles.hop}>
                        <Text style={{ fontSize: 14, color: "#fff", fontWeight: 'bold' }}>HOP 🤙</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#72B5A8",
        padding: 17,
        borderRadius: 5,
        marginBottom: 10,
        flex: 1,
    },
    hop: {
        backgroundColor: "#3C796D",
        padding: 15,
        borderRadius: 5,
    }

})

export default RideCard;