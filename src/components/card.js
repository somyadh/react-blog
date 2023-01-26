import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Image
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
function Card() {
  const [liked, setLiked] = useState(false);

  return (
  
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'300px'} borderBottom={'1px'} borderColor="black">
          <Image src='/imagineArtHere.jpg' alt='Dan Abramov' />
        </Box>
        <Box p={4}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              #blog
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Hello World
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
           Something is coming soon 
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}

export default Card
