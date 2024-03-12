import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
  VStack,
  HStack,

  Icon,
  Text,

  Box,
  StatusBar,
  Avatar,
  Heading,
  Input,
} from 'native-base';
('native-base');

import { NotificationBing, SearchNormal1 } from 'iconsax-react-native';
import colors from '../colors/colors';
import CustomInput from './CustomInput';

const Header = () => {
  return (
    <>
      <StatusBar bg={colors.secondary} barStyle="dark-content" />
      <Box safeAreaTop />
      <HStack
        px="3"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <Text color="#FD9220" fontSize="2xl" fontWeight="bold">
          pawder
        </Text>
        <Box
          flex={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end">
          <NotificationBing size="32" color="black" />
          <Box width={4} />
          <Avatar
            bg="green.500"
            size="sm"
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}>
            TE
          </Avatar>
        </Box>
      </HStack>

    </>
  );
};

export default Header;

