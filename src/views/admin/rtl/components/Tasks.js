import React from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  Checkbox,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import Menu from "components/menu/MainMenu";
import { MdCheckBox, MdDragIndicator } from "react-icons/md";

export default function Conversion(props) {
  const textColor = useColorModeValue("gray.900", "white");
  const boxBg = useColorModeValue("gray.100", "navy.700");
  const brandColor = useColorModeValue("blue.500", "blue.400");

  return (
    <Card p="20px" align="center" direction="column" w="100%" {...props}>
      <Flex alignItems="center" w="100%" mb="30px">
        <IconBox
          me="12px"
          w="38px"
          h="38px"
          bg={boxBg}
          icon={<Icon as={MdCheckBox} color={brandColor} w="24px" h="24px" />}
        />
        <Text color={textColor} fontSize="lg" fontWeight="bold" ml="10px">
          Tasks
        </Text>
        <Menu ms="auto" />
      </Flex>
      <Box px="11px">
        {tasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
      </Box>
    </Card>
  );
}

const TaskItem = ({ text, isChecked }) => {
  const textColor = useColorModeValue("gray.900", "white");

  return (
    <Flex mb="20px" alignItems="center">
      <Checkbox me="16px" defaultChecked={isChecked} colorScheme="blue" />
      <Text fontWeight="bold" color={textColor} fontSize="md">
        {text}
      </Text>
      <Icon
        ml="auto"
        as={MdDragIndicator}
        color="gray.600"
        w="24px"
        h="24px"
      />
    </Flex>
  );
};

const tasks = [
  { text: "Landing Page Design", isChecked: false },
  { text: "Dashboard Builder", isChecked: true },
  { text: "Mobile App Design", isChecked: true },
  { text: "Illustrations", isChecked: false },
  { text: "Promotional LP", isChecked: true },
];
