import React from "react";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";
import Card from "components/card/Card.js";
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from "variables/charts";
import { RiArrowUpSFill } from "react-icons/ri";

export default function DailyTraffic(props) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const arrowColor = useColorModeValue("green.500", "white");

  return (
    <Card align='center' direction='column' w='100%' {...props}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Text color='secondaryGray.600' fontSize='sm' fontWeight='500'>
            Daily Traffic
          </Text>
          <Flex align='end'>
            <Text color={textColor} fontSize='34px' fontWeight='700' lineHeight='100%'>
              5.6132
            </Text>
            <Text ms='6px' color='secondaryGray.600' fontSize='sm' fontWeight='500'>
              Visitors
            </Text>
          </Flex>
        </Flex>
        <Flex align='center'>
          <Icon as={RiArrowUpSFill} color={arrowColor} />
          <Text color={arrowColor} fontSize='sm' fontWeight='700' ml='2'>
            +2.45%
          </Text>
        </Flex>
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart chartData={barChartDataDailyTraffic} chartOptions={barChartOptionsDailyTraffic} />
      </Box>
    </Card>
  );
}
