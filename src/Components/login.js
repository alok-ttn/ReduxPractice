import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {toggleFlag, toggleSuccess} from '../Services/Authentication/action';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      headerTag: '',
      isLoggedin: false,
      flag: false,
    };
  }
  onChangeText(input) {}
  render() {
    const {loading} = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../Assets/imagebackgroundlogin.png')}
          style={styles.imageBack}>
          <View style={styles.LogoView}>
            <Image
              source={require('../Assets/axfoodLogoHigh.png')}
              style={styles.LogoStyle}
            />
          </View>
          <View style={styles.InputTextView}>
            <TextInput
              style={styles.inputDetails}
              placeholder={'Enter User Id'}
              placeholderTextColor={'#6d6d6d'}
              autoCapitalize={false}
              onChangeText={text => {
                this.setState({username: text});
              }}
            />
            <TextInput
              style={styles.inputDetails}
              placeholder={'Password'}
              placeholderTextColor={'#6d6d6d'}
              secureTextEntry={true}
              autoCapitalize={false}
              onChangeText={text => {
                this.setState({password: text});
              }}
            />
          </View>
          <View style={styles.LowerSection}>
            <TouchableOpacity
              onPress={() => {
                this.props.toggleHomeFlag(
                  this.state.username,
                  this.state.password,
                );
              }}>
              <View style={styles.loginButton}>
                <Text style={styles.loginText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.newUserSignUp}>
              <Text style={styles.newUserText}>New User?</Text>
              <TouchableOpacity>
                <Text style={styles.signUpText}> Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
          {loading === 1 ? (
            <View style={styles.Activity}>
              <ActivityIndicator />
            </View>
          ) : null}
        </ImageBackground>
      </View>
    );
  }
  togglesuccessvalue() {
    this.props.toggleSuccess();
  }
  componentDidMount() {}
  static getDerivedStateFromProps(props, state) {
    const {navigation} = props;
    if (props.success === 1) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Concept'}],
      });
    }
    if (props.success === 2) {
      Alert.alert('Error', 'Wrong Login Credentials', [
        {
          text: 'Try Again',
          onPress: () => props.toggleSucess(),
        },
      ]);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  InputTextView: {
    flex: 0.3,
    backgroundColor: '#fff',
    marginTop: 27,
  },
  imageBack: {
    flex: 1,
    resizeMode: 'center',
  },
  LowerSection: {
    flex: 0.25,
    backgroundColor: '#fff',
  },
  newUserSignUp: {
    flexDirection: 'row',
    marginVertical: 17,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  LogoView: {
    flex: 0.25,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  forgotPassword: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#484848',
    marginTop: 14,
    marginBottom: 20,
    fontWeight: '300',
  },
  newUserText: {
    fontSize: 15,
    color: '#484848',
    alignSelf: 'flex-end',
    fontWeight: '300',
  },
  loginButton: {
    borderRadius: 4,
    height: 50,
    backgroundColor: '#eb5a0e',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 27,
    marginRight: 32,
  },
  LogoStyle: {
    height: 29.5,
    width: 124.5,
    marginLeft: 25,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 13,
  },
  signUpText: {
    fontSize: 15,
    color: '#eb5a0e',
    fontWeight: '600',
  },
  inputDetails: {
    paddingVertical: 24,
    fontSize: 15,
    borderBottomColor: '#b5b3b1',
    borderBottomWidth: 1,
    marginLeft: 27,
    marginRight: 32,
    fontWeight: '500',
    color: '#000',
    marginTop: 40,
  },
});

const mapStateToProps = state => ({
  success: state.homeReducer.isSuccess,
  loading: state.homeReducer.isLoading,
  token: state.homeReducer.token,
});

const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
  toggleSucess: toggleSuccess,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
