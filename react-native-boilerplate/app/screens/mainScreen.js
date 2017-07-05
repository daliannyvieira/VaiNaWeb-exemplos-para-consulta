// Libs
import React, {Component} from 'react';
import { 
  View, 
  Text
} from 'react-native';

// Components
import MainBtn from '../components/mainBtn';

class MainScreen extends Component {

  constructor(props) {
    super(props);

    this.navigateInfo = this.navigateInfo.bind(this);
  }

  navigateInfo() {
    this.props.navigation.navigate('Info');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>
          Bem vindo ao React Native!
        </Text>
        <MainBtn
          label='Navegue!'
          onPress={this.navigateInfo} />
      </View>
    );
  }
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    color: '#2e3192',
    fontSize: 20
  }
};

export default MainScreen;