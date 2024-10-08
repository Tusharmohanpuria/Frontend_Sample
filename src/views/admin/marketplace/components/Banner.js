import React from "react";
import { Button, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/NftBanner1.png";

export default function Banner() {
  const textColor = useColorModeValue("white", "white");
  const buttonBg = useColorModeValue("white", "whiteAlpha.900");
  const buttonHoverBg = useColorModeValue("whiteAlpha.900", "whiteAlpha.700");

  return (
    <Flex
      direction='column'
      bgImage={`url(${banner})`}
      bgSize='cover'
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius='30px'
    >
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color={textColor}
        mb='14px'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight='700'
        lineHeight={{ base: "32px", md: "42px" }}
      >
        Discover, collect, and sell extraordinary NFTs
      </Text>
      <Text
        fontSize='md'
        color='#E3DAFF'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight='500'
        mb='40px'
        lineHeight='28px'
      >
        Enter this creative world. Discover the latest NFTs or start creating your own!
      </Text>
      <Flex align='center'>
        <Button
          bg={buttonBg}
          color='black'
          _hover={{ bg: buttonHoverBg }}
          _active={{ bg: buttonBg }}
          _focus={{ bg: buttonBg }}
          fontWeight='500'
          fontSize='14px'
          py='20px'
          px='27px'
          me='38px'
        >
          Discover now
        </Button>
        <Link>
          <Text color={textColor} fontSize='sm' fontWeight='500'>
            Watch video
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
