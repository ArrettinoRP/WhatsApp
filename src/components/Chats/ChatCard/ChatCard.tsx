import React from 'react';
import {Image} from 'react-native';
import {Text, View} from 'react-native';
import {chatCardStyles} from './chatCardStyles';

type ChatCardProps = {
  chatImageUrl: string;
  chatTitle: string;
  chatLastMessageTime: string;
  chatLastMessage: string;
};

export const ChatCard: React.FC<ChatCardProps> = ({
  chatImageUrl,
  chatTitle,
  chatLastMessageTime,
  chatLastMessage,
}) => {
  return (
    <>
      <View style={chatCardStyles.chatCard}>
        <Image source={{uri: chatImageUrl}} style={chatCardStyles.chatLogo} />
        <View style={chatCardStyles.informationContainer}>
          <View style={chatCardStyles.informationRow1}>
            <Text style={chatCardStyles.chatTitle}>{chatTitle}</Text>
            <Text style={chatCardStyles.chatLastMessageTime}>
              {chatLastMessageTime}
            </Text>
          </View>
          <Text style={chatCardStyles.chatLastMessage}>{chatLastMessage}</Text>
        </View>
      </View>
    </>
  );
};
