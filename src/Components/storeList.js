import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {toggleFlag, toggleSearch} from '../Services/Authentication/action';
import {FlatList} from 'react-native-gesture-handler';
class StoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
      data: [],
      searchURL: '',
      finalApiUrl: '',
      localSearchData: '',
    };
  }
  onChangeText(input) {}
  // addApi() {
  //   const {searchURL} = this.state;
  //   var urlApi =
  //     'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/searchResults/';
  //   var newApi = urlApi.concat(searchURL);
  //   this.state.finalApiUrl = newApi;
  // }
  render() {
    const {route, navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.TextInputView}
          placeholder="search item"
          autoCapitalize="none"
          onChangeText={txt => this.setState({searchURL: txt})}
        />
        {this.props.isSearching === true ? (
          <View style={styles.ModalView}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEnabled={true}
              data={this.state.localSearchData}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.ModalFlatItemsVIew}>
                      <View style={styles.ModalFlatInnerItemsView}>
                        <Text style={styles.ModalTextView}>
                          {item.productName}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.productId}
            />
          </View>
        ) : null}
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <View style={styles.button}>
            <Text>press to logout</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  componentDidMount() {}
  static getDerivedStateFromProps(props, state) {
    var lengthOfInput = state.searchURL.length;
    if (lengthOfInput >= 3) {
      var urlApi =
        'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/searchResults/';
      var newApi = urlApi.concat(state.searchURL);
      props.toggleSearch(props.token, newApi);
      state.localSearchData = props.searchData;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextInputView: {
    height: 40,
    width: 400,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 50,
    width: 300,
    marginTop: 100,
  },
  ModalFlatItemsVIew: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalTextView: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '600',
    justifyContent: 'center',
  },
  ModalFlatInnerItemsView: {
    backgroundColor: '#bfaa6f',
    height: 50,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalView: {
    backgroundColor: '#edc451',
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  token: state.homeReducer.token,
  isStore: state.homeReducer.isStore,
  storeData: state.homeReducer.storeAcess,
  searchData: state.homeReducer.searchData,
  isSearching: state.homeReducer.isSearching,
});

const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
  toggleSearch: toggleSearch,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreList);
