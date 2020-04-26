import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  AsyncStorage,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {
  toggleFlag,
  toggleStore,
  toggleConcept,
} from '../Services/Authentication/action';
import {FlatList} from 'react-native-gesture-handler';
class Concept extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
      data: [],
    };
  }
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('headerToken', this.props.token);
    } catch (error) {
      console.warn('error in saving async');
    }
  };
  render() {
    const {navigation} = this.props;
    return (
      // <SafeAreaView style={styles.container}>
      //   <FlatList
      //     showsHorizontalScrollIndicator={false}
      //     showsVerticalScrollIndicator={false}
      //     scrollEnabled={true}
      //     data={this.props.conceptData}
      //     renderItem={({item}) => {
      //       return (
      //         <TouchableOpacity
      //           activeOpacity={0.5}
      //           onPress={() => navigation.navigate('HomeScreen')}>
      //           <View style={styles.ModalFlatItemsVIew}>
      //             <View style={styles.ModalFlatInnerItemsView}>
      //               <Text style={styles.ModalTextView}>{item.name}</Text>
      //             </View>
      //           </View>
      //         </TouchableOpacity>
      //       );
      //     }}
      //     keyExtractor={item => item.productId}
      //   />
      // </SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.selectConceptText}>Select Concept</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              source={require('../Assets/search.png')}
              style={styles.searchIconImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.FlatListMainView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            data={this.props.conceptData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('StoreScreen')}>
                  <View style={styles.FlatListView}>
                    <Text style={styles.FlatListTextView}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.productId}
          />
        </View>
      </View>
    );
  }
  componentDidMount() {
    this.props.toggleConcept(this.props.token);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  headerView: {
    flex: 0.13,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  selectConceptText: {
    fontSize: 34,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 27,
  },
  FlatListTextView: {
    fontSize: 14,
    fontWeight: '600',
  },
  FlatListView: {
    marginTop: 70,
    marginLeft: 28,
  },
  FlatListMainView: {flex: 0.85, backgroundColor: '#fff'},
  searchIconImage: {height: 30, width: 30, marginRight: 20},
});
const mapStateToProps = state => ({
  token: state.homeReducer.token,
  isConceptLoading: state.homeReducer.isConceptLoading,
  conceptData: state.homeReducer.conceptData,
});

const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
  toggleConcept: toggleConcept,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Concept);
