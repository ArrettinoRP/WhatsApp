import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

type ChatCardStylesTypes = {
  chatCard: ViewStyle;
  chatLogo: ImageStyle;
  informationContainer: ViewStyle;
  informationRow1: ViewStyle;
  chatTitle: TextStyle;
  chatLastMessageTime: TextStyle;
  chatLastMessage: TextStyle;
};

export const chatCardStyles = StyleSheet.create<ChatCardStylesTypes>({
  chatCard: {
    height: 52,
    flexDirection: 'row',
    marginTop: 18,
  },
  chatLogo: {
    width: 52,
    height: 52,
    borderRadius: 360,
    marginLeft: 12,
    marginRight: 14.3,
  },
  informationContainer: {
    width: '80%',
  },
  informationRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
    color: '#000',
    marginTop: 5.5,
  },
  chatLastMessageTime: {
    fontSize: 12.5,
    textAlign: 'right',
    fontFamily: 'Roboto',
    color: '#757575',
    fontWeight: '400',
    lineHeight: 13,
    marginRight: 18,
  },
  chatLastMessage: {
    fontSize: 14,
    color: '#757575',
    fontWeight: '400',
    lineHeight: 15,
    fontFamily: 'Roboto',
    marginTop: 2,
  },
});
