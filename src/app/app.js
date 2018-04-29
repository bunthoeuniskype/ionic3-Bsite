import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'profile-img img': {
    'width': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '50%'
  },
  'profile-img': {
    'minWidth': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': '!important' }],
    'minHeight': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': '!important' }]
  }
});
