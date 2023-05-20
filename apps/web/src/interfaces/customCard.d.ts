/* eslint-disable import/extensions */
import { CardProps, TextProps } from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { CircleProps } from './circle';

interface CustomCardInterface {
  value: string;
  textProps: TextProps;
}

export interface CustomCardProps {
  properties: Array<CustomCardInterface>;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  cardProps?: CardProps;
  circleComponent?: boolean;
  circleProps?: CircleProps;
  flexMode?: boolean;
}