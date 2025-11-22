import type { ComponentPropsWithoutRef, SVGAttributes } from 'react';
import { ReactNode } from 'react';

//Text component
export type TextStyleType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'paragraph'
  | 'link'
  | 'captions'
  | 'body1'
  | 'body2'
  | 'b4';

export interface TextProps {
  as?: ElementType;
  variant?: TextStyleType;
  className?: string;
  children: React.ReactNode;
}

//Img component
export type imgType = 'figure' | 'span';

export interface ImgProps {
  as?: imgType;
  src: string;
  alt?: string;
  variant?: string;
  className?: string;
  width?: number;
  height?: number;
}

//Icon component
export type IconSize = 'small' | 'medium' | 'large' | string | number;

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  icon: React.FC<React.SVGAttributes<SVGSVGElement>>;
  variant?: IconSize;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

//Button component
export type ButtonSize = 'XL' | 'L' | 'M' | 'S';
export type ElementType = keyof JSX.IntrinsicElements;

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  as?: 'button' | 'link';
  href?: string;
  variant?: ButtonSize;
  key?: string;
  full?: boolean;
  bg?: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

//Tab component
export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabProps {
  tabs: TabItem[];
  defaultId?: string;
  variant?: 'underline';
  className?: string;
  labelClassName?: string;
  contentClassName?: string;
  onChange?: (id: string) => void;
}

//card component
export interface CardItem {
  id: string;
  href?: string;
  label: ReactNode;
  content: ReactNode;
  imgSrc: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export interface CardProps {
  item: CardItem;
  imgHeight?: number;
}

export interface CardSliderProps {
  cards: CardItem[];
  imgHeight?: number;
  className: string;
}

export interface GnbItem {
  id: string;
  title: string;
  link: string;
}

//Section component
export interface SectionProps {
  tag?: string;
  title: string;
  subTitle: React.ReactNode;
  headerClassName?: string;
  className?: string;
  variant?: 'inner' | 'out';
  children: React.ReactNode;
  bg?:string;
}
