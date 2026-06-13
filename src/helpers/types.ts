import { StaticImageData } from "next/image";
import type { JSX, MouseEventHandler, ReactNode } from "react";

export type TChildren = ReactNode;
export type TClassName = string;
export type TElement = JSX.Element;
export type TSvgIcon = StaticImageData;
export type TOnClick = MouseEventHandler<HTMLButtonElement>;

// services data
export interface TServices {
  _id: string;
  icon: TElement;
  title: string;
  description: string;
  rules?: string[];
}
