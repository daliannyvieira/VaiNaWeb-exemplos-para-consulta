// Libs
import React from 'react';
import { 
  TouchableOpacity, 
  Text 
} from 'react-native';

const MainBtn = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.btn}>
      <Text style={styles.btnText}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 55,
    marginTop: 15,
    backgroundColor: '#2e3192'
  },
  btnText: {
    color: '#fff',
    fontWeight: '600'
  }
};

export default MainBtn;