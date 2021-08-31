import React from 'react';
import {chatsList} from '../../../chatsList.json';
import {View} from 'react-native';
import {chatStyles} from './chatsStyles';
import {ChatsList} from '../../components/Chats';
import {Header} from '../../components/Layouts';

export const Chats: React.FC = () => {
  return (
    <View style={chatStyles.chatContainer}>
      <Header />
      <ChatsList data={chatsList} />
    </View>
  );
};
