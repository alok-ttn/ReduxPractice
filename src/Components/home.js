import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {toggleFlag, toggleStore} from '../Services/Authentication/action';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
      flag: false,
      isModalVisible: false,
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={this.props.storeData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('StoreList')}>
                <View style={styles.ModalFlatItemsVIew}>
                  <View style={styles.ModalFlatInnerItemsView}>
                    <Text style={styles.ModalTextView}>{item.storeId}</Text>
                    <Text style={styles.ModalTextView}>{item.storeName}</Text>
                    <Text style={styles.ModalTextView}>{item.city}</Text>
                    <Text style={styles.ModalTextView}>
                      {item.storeAddress}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.productId}
        />
      </SafeAreaView>
    );
  }
  componentDidMount() {
    this.props.toggleStore(this.props.token);
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.warn(props.storeData);
  //   const {navigation} = props;
  //   if (props.isStore === true) {
  //     navigation.navigate('StoreList');
  //   }
  // }
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
  ModalFlatItemsVIew: {
    height: 130,
    width: '100%',
    backgroundColor: '#e0bd5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalMainVIew: {
    flex: 0.7,
    backgroundColor: '#f2f2f2',
    marginTop: 50,
  },
  ModalTextView: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '600',
    justifyContent: 'center',
  },
  ModalImagesView: {height: 40, width: 40},
  ModalFlatInnerItemsView: {
    backgroundColor: '#bfaa6f',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
  },
});

const mapStateToProps = state => ({
  token: state.homeReducer.token,
  isStore: state.homeReducer.isStore,
  storeData: state.homeReducer.storeAcess,
});

const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
  toggleStore: toggleStore,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
