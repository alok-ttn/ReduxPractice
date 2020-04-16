import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

class StoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
      data: [],
    };
  }
  render() {
    const {route, navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <View style={styles.button}>
            <Text>press to logout</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    alignItems: 'center',
  },
  child: {
    width: '100%',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    height: 50,
    width: 300,
    marginTop: 100,
  },
});

export default StoreList;
