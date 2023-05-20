/* eslint-disable import/extensions */
import { Button, Flex } from '@chakra-ui/react';
import { CustomButtonProps } from '@/types/customButton';

const CustomButton = ({ onClick, innerText, type, disabled }: CustomButtonProps) => (
  <Flex justify="center">
    <Button
      mb={5}
      width={type === 'modal' ? '70vw' : '85vw'}
      height="50px"
      rounded="12px"
      bg="black.50"
      color="white"
      _hover={{ bg: 'gray.50', color: 'black.25' }}
      onClick={onClick}
      isDisabled={disabled}
    >
      {innerText}
    </Button>
  </Flex>
);

export default CustomButton;
