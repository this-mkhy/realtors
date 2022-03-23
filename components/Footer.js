import { Box, Flex, Spacer, Heading, Link, Button } from '@chakra-ui/layout';

const Footer = () => (
  <Box textAlign='center' p='5' color='black.600' borderTop='1px' borderColor='gray.100'>
    <Flex>
        <Box color='blue.600' p='2'>
            <Heading >Realtors</Heading>
        </Box>
    </Flex>
    <Box>
        <Flex>
            <Box w='200px' h='20' p='2' >
                <Link href="#">About</Link> <br />
                <Link href="#">Address</Link>
            </Box>
            <Spacer />

            <Box w='200px'>
                <Link href="#">Blog</Link><br />
                <Link href="#">Rent & Buy </Link>
            </Box>            
            <Spacer />

            <Box w='200px' h='10'>
                <Link href="#">Social media</Link><br />
                <Link href="#">Terms of service</Link>
            </Box>  
        </Flex>
        © 2022 Realtors, Inc.
        <Box color='blue.600'>
            <a href="https://twitter.com/this_mkhy">this-mkhy</a>
        </Box>
    </Box>
  </Box>
);

export default Footer;