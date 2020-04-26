import React from 'react';
import {View, AsyncStorage, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {toggleSplash} from '../Services/Authentication/action';
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }
  onChangeText(input) {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerview}>
          <Image
            source={require('../Assets/axfoodLogoHigh.png')}
            style={styles.LogoStyle}
          />
        </View>
      </View>
    );
  }
  _retrieveData = async () => {
    const {navigation} = this.props;
    try {
      const value = await AsyncStorage.getItem('headerToken');
      if (value !== null) {
        this.props.toggleSplash();
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Concept'}],
          });
        }, 3000);
      }
      if (value === null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
      }
    } catch (error) {
      console.warn('no data');
      // Error retrieving data
    }
  };
  componentDidMount() {
    this._retrieveData();
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2e3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerview: {
    height: 100,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoStyle: {
    height: 40.5,
    width: 200.5,
    resizeMode: 'contain',
  },
});
const mapStateToProps = state => ({
  tokenvalue: state.homeReducer.token,
});

const mapDispatchToProps = {
  toggleSplash: toggleSplash,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
