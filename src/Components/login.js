import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {toggleFlag} from '../Services/Authentication/action';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      headerTag: ' ',
      isLoggedin: false,
    };
  }
  onChangeText(input) {}
  render() {
    const {navigation, flag} = this.props;
    console.warn(flag);
    const {username, password} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.usernameView}>Username</Text>
          <TextInput
            style={styles.TextInputView}
            autoCapitalize="none"
            onChangeText={txt => this.setState({username: txt})}
          />
        </View>
        <View>
          <Text style={styles.usernameView}>password</Text>
          <TextInput
            style={styles.TextInputView}
            autoCapitalize="none"
            onChangeText={txt => this.setState({password: txt})}
          />
        </View>
        <TouchableOpacity
          style={styles.touchableView}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.usernameView}>press to login</Text>
        </TouchableOpacity>
        <Text>value of flag is: {this.props.flag}</Text>
        <Text style={styles.usernameView}>{flag}</Text>
        <Text> input password is : {password}</Text>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    // console.warn(this.props.flag);
    setTimeout(() => {
      this.props.toggleHomeFlag();
      this.props.flag;
    }, 4000);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    alignItems: 'center',
  },
  usernameView: {
    fontSize: 20,
    color: 'black',
  },
  TextInputView: {
    height: 40,
    width: 300,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  touchableView: {
    width: 200,
    height: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    marginBottom: 40,
  },
});

const mapStateToProps = state => ({
  flag: state.homeReducer.homeFlag,
});

const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
