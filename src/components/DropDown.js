import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,

} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DropDown = ({ list, name, selectedItem, setSelectedItem }) => {
    const [isListShown, setListShown] = useState(false);

    return (
        <View style={{ marginBottom: 22, }}>
            <Text style={styles.inputHeader}>{name}</Text>
            <TouchableOpacity
                style={styles.input}
                onPress={() => setListShown(isListShown => !isListShown)}
            >
                <Text style={{ color: '#2D3436' }}>{selectedItem}</Text>
            </TouchableOpacity>
            {
                isListShown &&
                <Picker
                    selectedValue={selectedItem}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedItem(itemValue)
                    }
                    itemStyle={{ color: '#fff' }}
                >
                    {
                        list.map((item, index) => {
                            return <Picker.Item key={item} label={item} value={item} />
                        })
                    }
                </Picker>
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
    },
})

export default DropDown;
