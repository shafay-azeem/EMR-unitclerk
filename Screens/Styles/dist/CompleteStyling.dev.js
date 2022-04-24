"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _StyleSheet$create;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _reactNative.StyleSheet.create((_StyleSheet$create = {
  ContainerWhole: {
    width: '100%',
    height: '100%',
    backgroundColor: '#89F717',
    flex: 1
  },
  containerForSignIn: {
    width: '90%',
    height: 600,
    backgroundColor: '#FFFFFF',
    flexDirection: "row",
    borderColor: 'black',
    borderRadius: 50,
    marginTop: 40,
    alignSelf: 'center' // borderWidth:3,

  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10
  },
  checkbox: {
    alignSelf: "left"
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonSignIn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#252726',
    height: 50,
    margin: 80
  },
  buttonGeneral: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#252726',
    height: 50,
    //  margin:50,
    marginBottom: 30,
    marginLeft: 400,
    marginRight: 400,
    marginTop: 10
  },
  button_Side_by_Side: {
    backgroundColor: '#252726',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: 50,
    margin: 50
  },
  Edittext: {
    borderColor: "#B8B8B8",
    backgroundColor: '#F7F7F7',
    // borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginTop: 2,
    marginHorizontal: 20
  },
  EdittextHeading: {
    marginLeft: 27,
    fontWeight: 'bold',
    marginTop: 10
  },
  EMRheading: {
    marginTop: 10,
    alignItems: 'center',
    // justifyContent:'center',
    // alignSelf:'center', 
    color: 'black'
  },
  TextHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  containerForSearchPatient: {
    width: '80%',
    height: 20,
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 80,
    alignSelf: 'center' // borderWidth:3

  },
  containerForButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: "85%"
  },
  buttonForSearchPatient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#252726',
    height: 50,
    margin: 40
  }
}, _defineProperty(_StyleSheet$create, "containerForSearchPatient", {
  width: '80%',
  backgroundColor: '#FFFFFF',
  borderColor: 'black',
  borderRadius: 10,
  marginTop: 80,
  alignSelf: 'center' // borderWidth:3

}), _defineProperty(_StyleSheet$create, "Side_by_side_EditText", {
  flex: 1,
  flexDirection: "row"
}), _defineProperty(_StyleSheet$create, "inputWrap", {
  flex: 1
}), _defineProperty(_StyleSheet$create, "picker", {
  margin: 15
}), _defineProperty(_StyleSheet$create, "containerForSelectPatient", {
  backgroundColor: '#D7E8ED',
  borderColor: 'blue',
  borderRadius: 10,
  padding: 10,
  margin: 20 // borderWidth:1

}), _defineProperty(_StyleSheet$create, "roundIcon", {
  alignSelf: 'center',
  width: 50,
  height: 50,
  borderRadius: 50 / 2,
  backgroundColor: 'orange'
}), _defineProperty(_StyleSheet$create, "tinyLogo", {
  width: '100%',
  height: '100%',
  alignSelf: 'center'
}), _defineProperty(_StyleSheet$create, "Button_text_styling", {
  fontSize: 15,
  color: '#FFFFFF',
  fontWeight: 'normal'
}), _defineProperty(_StyleSheet$create, "InsideConatiner1", {
  backgroundColor: '#8BB68B',
  width: '50%',
  resizeMode: 'contain'
}), _defineProperty(_StyleSheet$create, "InsideConatiner2", {
  backgroundColor: '#FFFFFF',
  width: '50%',
  resizeMode: 'contain'
}), _defineProperty(_StyleSheet$create, "containerForScrollView", {
  width: '80%',
  backgroundColor: '#FFFFFF',
  borderColor: 'black',
  borderRadius: 10,
  marginTop: 30,
  alignSelf: 'center' // borderWidth:3

}), _defineProperty(_StyleSheet$create, "ViewForRow", {
  flexDirection: "row"
}), _defineProperty(_StyleSheet$create, "ViewForInsideRow", {
  flexDirection: 'row',
  width: '50%',
  alignItems: 'center',
  justifyContent: 'flex-start'
}), _defineProperty(_StyleSheet$create, "TextForInsideRow", {
  marginTop: 10,
  lineHeight: 20,
  color: 'black',
  alignSelf: 'flex-start'
}), _defineProperty(_StyleSheet$create, "TextForInsideRowSidebySide", {
  marginTop: 11,
  color: 'black',
  lineHeight: 20,
  alignSelf: 'flex-start',
  fontWeight: 'bold'
}), _StyleSheet$create));

exports["default"] = _default;