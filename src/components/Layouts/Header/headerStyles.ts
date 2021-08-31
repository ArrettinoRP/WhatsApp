import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type HeaderStylesTypes = {
  headerContainer: ViewStyle;
  headerLogo: TextStyle;
  headerRow1: ViewStyle;
  actionsContainer: ViewStyle;
  search: ViewStyle;
  options: ViewStyle;
  headerRow2: ViewStyle;
  camera: ViewStyle;
  navOptions: ViewStyle;
  textNavOptions: TextStyle;
};

export const headerStyles = StyleSheet.create<HeaderStylesTypes>({
  headerContainer: {
    backgroundColor: '#006257',
    height: 95,
    paddingTop: 15,
  },
  headerLogo: {
    fontFamily: 'Roboto',
    fontSize: 20,
    marginLeft: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  search: {
    width: 20,
    height: 20,
    marginRight: 30,
  },
  options: {
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
  headerRow2: {
    marginTop: 20,
    flexDirection: 'row',
  },
  camera: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  navOptions: {
    flex: 5,
    alignItems: 'center',
  },
  textNavOptions: {
    color: '#83AFAA',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
