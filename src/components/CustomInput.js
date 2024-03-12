
import React from 'react'
import { VStack, Box, Input, Icon } from 'native-base'
import { SearchNormal1 } from 'iconsax-react-native';

const CustomInput = () => {
    return (
        <>
            <VStack w="100%" space={1} alignSelf="center" mb="5" marginX="1">

                <Box marginRight={7}>
                    <Input
                        variant="unstyled"
                        focusOutlineColor="gray.500"
                        placeholder="Neye ihtiyacin var?"
                        width="100%"
                        borderRadius="8"
                        py="3"
                        px="1"
                        borderWidth="0.2"
                        marginLeft="3"
                        marginRight="3"
                        fontSize="14"
                        InputLeftElement={
                            <Icon
                                m="2"
                                ml="3"
                                size="2"
                                as={<SearchNormal1 size="30" color="#fd9220" />}
                            />
                        }
                    />
                </Box>
            </VStack>
        </>
    )
}

export default CustomInput