// Libs
import React, {Component} from 'react';
import { 
  View, 
  Text,
  Image
} from 'react-native';

class InfoScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'http://i.dailymail.co.uk/i/pix/2015/08/19/00/2B7A6D3000000578-3202901-image-a-29_1439942231105.jpg'}}
          style={styles.img} />
      </View>
    );
  }
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e3192'
  },
  img: {
    width: '90%',
    height: '60%',
    resizeMode: 'contain'
  }
};

export default InfoScreen;