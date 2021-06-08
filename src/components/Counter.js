import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,

} from 'react-native';

const Counter = ({ name }) => {
    const [count, setCount] = useState(0);

    const handleCount = (operation) => {
        if (operation === "+" && count < 4)
            setCount(count => count + 1);
        else if (operation === "-" && count > 0)
            setCount(count => count - 1);
        return
    }

    return (
        <View style={{ marginBottom: 22, }}>
            <Text style={styles.inputHeader}>{name}</Text>
            <View style={styles.input}>
                <Text style={{ color: "#2D3436", fontSize: 20, width: 20 }}>{count}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleCount("-")}
                    >
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 'bold' }}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleCount("+")}
                    >
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 'bold' }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    button: {
        backgroundColor: '#3C796D',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
    }
})

export default Counter;
