import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: true,
      finaldata: '',
    };
  }
  render() {
    const {navigation} = this.props;
    const data = this.state.finaldata;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../Assets/back.png')}
              style={styles.backbutton}
            />
          </TouchableOpacity>
          <Text style={styles.TitleTextView}>Product Details</Text>
        </View>
        <View style={styles.lowerNameView}>
          <Text style={styles.TextProductname}>{data.productName}</Text>
          <Text style={styles.textProductSAP}>{data.productNumberSAP}</Text>
        </View>
        <Text style={styles.lastScannedText}>Last Scanned Details</Text>
        <View style={styles.boxDeailsView}>
          <View style={styles.innerBoxQuantityView}>
            <Text style={styles.BoxHeadingText}>Quantity</Text>
            <Text style={styles.boxDataText}>
              {data.volume === null ? 0 : data.volume}Kg
            </Text>
          </View>
          <View style={styles.boxinnerViewPrice}>
            <Text style={styles.BoxHeadingText}>Price</Text>
            <Text style={styles.boxDataText}>
              ${data.price === null ? 0 : data.price}
            </Text>
          </View>
        </View>
        <View style={{flex:0.1,backgroundColor:'#f0f'}}></View>
      </View>
    );
  }
  componentDidMount() {
    const {route} = this.props;
    if (this.state.input === true) {
      this.setState({finaldata: route.params.data, input: false});
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  lowerNameView: {
    flex: 0.11,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  boxinnerViewPrice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 25,
    alignItems: 'center',
    borderTopColor: '#d4d4d4',
    borderTopWidth: 1,
  },
  boxDataText: {fontSize: 17, fontWeight: '600', color: '#858585'},
  BoxHeadingText: {fontSize: 16, fontWeight: '500', color: '#858585'},
  innerBoxQuantityView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 25,
    alignItems: 'center',
  },
  textProductSAP: {
    marginHorizontal: 35,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
    color: '#4a4a4a',
  },
  lastScannedText: {
    fontSize: 14,
    marginHorizontal: 35,
    fontWeight: '400',
    color: '#4a4a4a',
    marginTop: 10,
  },
  boxDeailsView: {
    marginHorizontal: 35,
    flex: 0.15,
    backgroundColor: '#f2f2f2',
    marginTop: 9,
    borderRadius: 6,
  },
  TextProductname: {fontSize: 28, marginHorizontal: 32, fontWeight: '400'},
  backbutton: {
    height: 38,
    width: 38,
    marginLeft: 18,
    marginBottom: 20,
  },
  headerView: {
    flex: 0.13,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
  },
  TitleTextView: {
    fontSize: 38,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 20,
  },
});

export default ItemDetails;
