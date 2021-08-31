import React from 'react';
import {ChatCard} from '../index';
import {FlatList} from 'react-native';
import {ChatCardData} from '../types';

type ChatListProps = {
  data: ChatCardData[];
};

export const ChatsList: React.FC<ChatListProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ChatCard
          chatImageUrl={item.chatImageUrl}
          chatTitle={item.chatTitle}
          chatLastMessageTime={item.chatLastMessageTime}
          chatLastMessage={item.chatLastMessage}
        />
      )}
    />
  );
};
