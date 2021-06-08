import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}


const CustomDataTimePicker = ({ name, type }) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [isListShown, setListShown] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const formatData = () => {
        if (type === "date")
            return String(formatDate(date));
        return `${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`
    }

    return (
        <View style={{ marginBottom: 22 }}>
            <Text style={styles.inputHeader}>{name}</Text>
            <TouchableOpacity
                style={styles.input}
                onPress={() => setListShown(isListShown => !isListShown)}
            >
                <Text style={{ color: '#2D3436' }}>{formatData()}</Text>
            </TouchableOpacity>
            {
                isListShown &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={type}
                    is24Hour={true}
                    display="spinner"
                    onChange={onChange}
                    textColor="white"
                />
            }
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
        alignSelf: 'flex-start',
    },
})

export default CustomDataTimePicker;