// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit exercitationem soluta sed voluptate nulla, tempora nobis eaque facere fugiat nisi pariatur ipsam. Alias voluptatem cum vel id qui quae? Asperiores porro praesentium ipsa unde harum laboriosam nihil ipsum odit, rem dicta doloribus ut? Commodi fugit assumenda, cumque ullam tempore dolore tenetur dicta veritatis. Dicta quae totam ipsum nobis, ipsa adipisci.
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Education'
          value='Stanford University'
        />
        <Information
          boxShadow={cardShadow}
          title='Languages'
          value='English, Spanish, Italian'
        />
        <Information
          boxShadow={cardShadow}
          title='Department'
          value='Product Design'
        />
        <Information
          boxShadow={cardShadow}
          title='Work History'
          value='Google, Facebook'
        />
        <Information
          boxShadow={cardShadow}
          title='Organization'
          value='Web LLC'
        />
        <Information
          boxShadow={cardShadow}
          title='Birthday'
          value='20 July 1986'
        />
      </SimpleGrid>
    </Card>
  );
}
