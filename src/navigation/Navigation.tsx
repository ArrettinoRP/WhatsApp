import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatsContainer} from '../screens/Chats';

const Stack = createNativeStackNavigator<StackScreensListTypes>();

export type StackScreensListTypes = {
  Chats: undefined;
};

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Chats" component={ChatsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
