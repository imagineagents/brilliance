
const React = require('react-native');

const { StyleSheet, Dimensions } = React;
var {width} = Dimensions.get('window');

export default {
  container: {
    backgroundColor: '#FBFAFA',
    padding: 10,
  },
  row: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 5
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 18,
  },
  searchAll: {
    borderRadius: 0,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: width/2 - 15,
    height: width/2 - 15,
    overflow: 'visible'
  }
};
