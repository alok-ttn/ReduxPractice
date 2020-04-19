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
  ActivityIndicator,
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
      flag: false,
    };
  }
  onChangeText(input) {}
  render() {
    const {navigation, loading, failed, success} = this.props;
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
          // onPress={() => navigation.navigate('HomeScreen')}
          onPress={() => {
            this.setState({flag: true});
          }}>
          <Text style={styles.usernameView}>press to login</Text>
        </TouchableOpacity>
        <Text>input username is: {username}</Text>
        <Text> input password is : {password}</Text>

        {loading === 1 && success === 0 ? (
          <View style={styles.Activity}>
            <ActivityIndicator />
          </View>
        ) : null}
        {loading === 0 && success === 1
          ? navigation.navigate('HomeScreen')
          : null}
        {loading === 0 && failed === 1
          ? Alert.alert('wrong credentials')
          : null}
      </SafeAreaView>
    );
  }

  componentDidMount() {}
  static getDerivedStateFromProps(props, state) {
    console.warn(state.flag);
    if (state.flag === true) {
      props.toggleHomeFlag(state.username, state.password);
    }
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
  Activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
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
  failed: state.homeReducer.isFailed,
  success: state.homeReducer.isSuccess,
  loading: state.homeReducer.isLoading,
  token: state.homeReducer.token,
});

const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
