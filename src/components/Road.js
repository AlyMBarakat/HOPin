import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

import RideCard from './RideCard';

const temp = [
  {
    name: 'Aly',
    car: 'Mitsubishi Lancer 2007',
  },
  {
    name: 'Khalid Khalil',
    car: 'Fiat Tipo',
  },
  {
    name: 'Amira Barakat',
    car: 'Nissan Qashqai',
  },
];

const Road = ({source = 'Cairo', destination = 'Alexandria'}) => {
  const [ridesShown, setRides] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          // animate components transitions
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setRides(ridesShown => !ridesShown);
        }}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
          {source} {'->'} {destination}
        </Text>
      </TouchableOpacity>
      {ridesShown &&
        temp.map((item, index) => {
          return <RideCard key={index} name={item.name} car={item.car} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2020',
    padding: 17,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Road;
