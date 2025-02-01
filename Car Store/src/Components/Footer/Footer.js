import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiCarthrottle } from "react-icons/si";
import React from "react";

function Footer() {
  return (
    <Box
      bg="gray.900"
      color="gray.400"
      py={8}
      w="100%"
      height={"6rem"}
      position="fixed"
      bottom="0"
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
        >
          <Flex align="center" mb={{ base: 4, sm: 0 }}>
            <Icon as={SiCarthrottle} w={10} h={10} color="red.500" mr={3} />
            <Text fontSize="xl" color="white">
              CarSale
            </Text>
          </Flex>

          <Text fontSize="sm">
            © 2025 CarSale —
            <Link
              href="https://github.com/chethankumarcb07"
              ml={1}
              isExternal
              color="gray.500"
            >
              @chethanKumar(gitHubRepo)
            </Link>
          </Text>

          <Flex mt={{ base: 4, sm: 0 }} spacing={4}>
            <Link href="https://www.instagram.com/kumar__17" isExternal ml={3}>
              <Icon as={FaInstagram} w={5} h={5} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/chethan-kumar-s-036856290/"
              isExternal
              ml={3}
            >
              <Icon as={FaLinkedin} w={5} h={5} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export { Footer };
