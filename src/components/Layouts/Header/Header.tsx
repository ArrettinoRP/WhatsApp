import React from 'react';
import {Text, View} from 'react-native';
import {headerStyles} from './headerStyles';
import SearchIcon from '../../../assets/images/SearchIcon';
import OptionsIcon from '../../../assets/images/OptionsIcon';
import CameraIcon from '../../../assets/images/CameraIcon';

export const Header = () => {
  return (
    <>
      <View style={headerStyles.headerContainer}>
        <View style={headerStyles.headerRow1}>
          <Text style={headerStyles.headerLogo}>WhatsApp</Text>
          <View style={headerStyles.actionsContainer}>
            <View style={headerStyles.search}>
              <SearchIcon height={20} width={20} />
            </View>
            <View style={headerStyles.options}>
              <OptionsIcon height={20} width={5} />
            </View>
          </View>
        </View>
        <View style={headerStyles.headerRow2}>
          <View style={headerStyles.camera}>
            <CameraIcon height={18} width={21.5} />
          </View>
          <View style={headerStyles.navOptionsFocus}>
            <Text style={headerStyles.textNavOptionsFocus}>CHATS</Text>
          </View>
          <View style={headerStyles.navOptions}>
            <Text style={headerStyles.textNavOptions}>STATUS</Text>
          </View>
          <View style={headerStyles.navOptions}>
            <Text style={headerStyles.textNavOptions}>CALLS</Text>
          </View>
        </View>
      </View>
    </>
  );
};
