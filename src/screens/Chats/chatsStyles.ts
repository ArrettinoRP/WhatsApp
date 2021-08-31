import {StyleSheet, ViewStyle} from 'react-native';

type ChatCardStylesTypes = {
  chatContainer: ViewStyle;
};

export const chatStyles = StyleSheet.create<ChatCardStylesTypes>({
  chatContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});
