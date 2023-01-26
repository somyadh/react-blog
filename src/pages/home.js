import React from 'react';
import {
  ChakraProvider,
  Box,
  Link,
  Heading,
  VStack,
  Flex,
  Spacer,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from "../Logo"
import {  NavLink as RouterLink } from 'react-router-dom';


function Home() {
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid  p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={10}>
              <Heading color="teal.500">Somya Dhingra </Heading>
              <Logo h="40vmin" pointerEvents="none" />
              <Flex>
                <Box p='4'>
                  <Link href="https://somyadh.github.io"
                  fontSize="2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="teal.500"> Resume
                  </Link>
                </Box>
                <Spacer />
                <Box p='4'>
                  <Link  as={RouterLink}
                  to={'blogs'}
                  fontSize="2xl"
                  color="teal.500"> Blog
                  </Link>
                </Box>
              </Flex>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
    );
  }
  
export default Home;