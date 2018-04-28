import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-chat ion-content': {
    'background': 'url(../assets/imgs/chat-back.png) no-repeat center center fixed',
    'backgroundSize': 'cover',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'hidden'
  },
  'page-chat ion-content item-md': {
    'background': 'none'
  },
  'page-chat ion-content item-ios': {
    'background': 'none'
  },
  'page-chat ion-footer': {
    'background': 'white'
  },
  'page-chat ion-footer ion-icon': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': 'green'
  },
  'page-chat chat-status': {
    'minHeight': [{ 'unit': 'px', 'value': 49 }]
  },
  'page-chat chat-status chat-date': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'fontStyle': 'italic',
    'color': '#fff',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#222,' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#aaa' }],
    'height': [{ 'unit': 'px', 'value': 15 }],
    'left': [{ 'unit': '%H', 'value': 0.1 }],
    'right': [{ 'unit': '%H', 'value': 0.1 }]
  },
  'page-chat chat-status chat-content-center': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#e1e1f7',
    'borderRadius': '6px',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#555',
    'height': [{ 'unit': 'px', 'value': 34 }],
    'left': [{ 'unit': '%H', 'value': 0.1 }],
    'right': [{ 'unit': '%H', 'value': 0.1 }]
  },
  'page-chat chat-message': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'minHeight': [{ 'unit': 'px', 'value': 40 }]
  },
  'page-chat chat-message right-bubble': {
    'position': 'relative',
    'background': '#dcf8c6',
    'borderTopLeftRadius': '.4em',
    'borderBottomLeftRadius': '.4em',
    'borderBottomRightRadius': '.4em',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': '%H', 'value': 0.15 }]
  },
  'page-chat chat-message right-bubble spanmsg-name': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': 'bold',
    'color': 'green'
  },
  'page-chat chat-message right-bubble spanmsg-date': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }]
  },
  'page-chat chat-message right-bubble:after': {
    'content': '''',
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 27 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderLeftColor': '#dcf8c6',
    'borderRight': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': -13.5 }],
    'marginRight': [{ 'unit': 'px', 'value': -27 }]
  },
  'page-chat chat-message left-bubble': {
    'position': 'relative',
    'background': '#d8f0f5',
    'borderTopRightRadius': '.4em',
    'borderBottomLeftRadius': '.4em',
    'borderBottomRightRadius': '.4em',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': '%H', 'value': 0.05 }]
  },
  'page-chat chat-message left-bubble spanmsg-name': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': 'bold',
    'color': 'blue'
  },
  'page-chat chat-message left-bubble spanmsg-date': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }]
  },
  'page-chat chat-message left-bubble:after': {
    'content': '''',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 27 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderRightColor': '#ffffff',
    'borderLeft': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': -13.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -27 }]
  }
});
