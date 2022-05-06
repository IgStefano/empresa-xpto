import { Dispatch, SetStateAction } from "react";

export interface TopbarProps {
    children: string; 
    color: string;
    background: string; 
    setCurrency?: Dispatch<SetStateAction<string>>;
    currencySelect?: boolean;
  }

export interface PriceBoxProps {
    value: string;
    currency: string;
    paymentInterval: string
}

export interface ContactTableRowProps {
    boxBackground: string;
    boxIcon: string;
    rowBackground: string;
    rowText?: string;
    rowIcon?: string;
    isLink?: boolean;
    firstAddressLine?: string;
    secondAddressLine?: string;
}

export interface FooterBoxProps {
    title: string;
    items: Array<string>;
}