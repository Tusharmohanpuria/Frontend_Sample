import React from "react";
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";

export default function Conversion(props) {
  const textColor = useColorModeValue("gray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue("0px 4px 12px rgba(0, 0, 0, 0.1)", "unset");

  return (
    <Card p="20px" align="center" direction="column" w="100%" {...props}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Your Pie Chart
        </Text>
        <Select
          fontSize="sm"
          variant="filled"
          defaultValue="monthly"
          width="unset"
          fontWeight="700"
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Select>
      </Flex>

      <PieChart
        h="100%"
        w="100%"
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />

      <Flex
        bg={cardColor}
        flexDirection="row"
        boxShadow={cardShadow}
        w="100%"
        p="15px"
        px="20px"
        mt="15px"
        mx="auto"
        borderRadius="10px"
      >
        <Box flex="1" textAlign="center">
          <Text
            fontSize="sm"
            color="secondaryGray.600"
            fontWeight="700"
            mb="5px"
          >
            Your files
          </Text>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            63%
          </Text>
        </Box>
        <Box flex="1" textAlign="center">
          <Text
            fontSize="sm"
            color="secondaryGray.600"
            fontWeight="700"
            mb="5px"
          >
            System
          </Text>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            25%
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
