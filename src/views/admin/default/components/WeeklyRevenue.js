import React from "react";
import { Box, Button, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import BarChart from "components/charts/BarChart";
import { MdBarChart } from "react-icons/md";
import { barChartDataConsumption, barChartOptionsConsumption } from "variables/charts";

export default function WeeklyRevenue(props) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue("secondaryGray.400", "whiteAlpha.50");
  const bgFocus = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Card align='center' direction='column' w='100%' {...props}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'
        >
          Weekly Revenue
        </Text>
        <Button
          bg={bgButton}
          _hover={{ bg: bgHover }}
          _focus={{ bg: bgFocus }}
          _active={{ bg: bgFocus }}
          w='37px'
          h='37px'
          borderRadius='10px'
          justifyContent='center'
          alignItems='center'
        >
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>

      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
}
