/* eslint-disable import/extensions */
import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ArrowRight } from 'react-feather';
import { TopHeadingProps } from '@/types/TopHeading';

const TopHeading: FC<TopHeadingProps> = ({ heading, subText, arrow }) => (
  <Box mt="20px" mb="30px">
    <Text fontSize="4xl" fontWeight="black" color="black.50">
      {heading}
      <br />
    </Text>
    <Flex>
      <Text fontSize="lg" ml="0.5" fontWeight="medium" color="black.25" mr="1">
        {subText}
      </Text>
      {arrow ? (
        <Box mt="1px">
          <ArrowRight width="13px" color="#353535" />
        </Box>
      ) : (
        ''
      )}
    </Flex>
  </Box>
);

export default TopHeading;
