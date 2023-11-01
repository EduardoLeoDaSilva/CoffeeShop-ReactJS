import styled, { css } from "styled-components";
import { HTMLProps } from 'react'

interface InputProps extends HTMLProps<HTMLInputElement> {
    type: string;
    $expand?: boolean;
    'max-width'?: string;
}

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 2rem;
    padding: 0 10rem 15rem 10rem;

    & :checked+label{
        background-color: ${props => props.theme['purple-light'] };
        border: 1px solid ${props => props.theme.purple };
    }
`

export const CheckoutCard = styled.div`
    width: 100%;
    padding: 1.25rem;
    border-style: none;
    background-color: ${props => props.theme["base-card"]};
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &>div{
        display: flex;
        gap: 0.75rem;
    }
    &>div>input[type="radio"]{
        display: none;
    }
`




export const Divider = styled.div`
    margin: calc(1.5rem - 1rem) 0 1.5rem 0;
    width: 100%;
    height: 0px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme["base-button"]};
`

export const CheckoutSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    &>h2:first-child{
        font-family: 'Baloo 2';
        font-size: 1.12rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
    }
`

export const CartPriceSummary = styled.div`
    display: grid !important;
    grid-template: repeat(3,1fr)/ repeat(2, 1fr);

    &>p:nth-child(1), &>p:nth-child(3){
        color: ${props => props.theme["base-subtitle"]};
        font-family: 'Roboto';
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 26px */
    }

    &>span:nth-child(2), &>span:nth-child(4){
        color: ${props => props.theme["base-subtitle"]};
        font-family: 'Roboto';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 26px */
    }

        &>p:nth-child(5), &>span:nth-child(6){
        color: ${props => props.theme["base-subtitle"]};
        font-family: 'Roboto';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 26px */

    }





`

export const CartPrice = styled.span`
    justify-self: end;
`


export const TitleWithSubTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;

    & h2 {
        font-family: 'Roboto';
        font-size: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: end;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }

    & span{
        font-family: 'Roboto';
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */
        color: ${props => props.theme["base-text"]};
    }

    & div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
    }

`





export const CheckoutInput = styled.input<InputProps>`
    background-color: ${props => props.theme["base-input"]};
    border-radius: 6px;
    max-width: ${props => props["max-width"] ? props["max-width"] : '100%'} ;
    padding: 0.75rem;
    border: 1px solid var(--base-button, #E6E5E5);
    font-family: 'Roboto';
    outline-style: none;
    color: ${props => props.theme["base-label"]};;

    ${props => props.$expand == true ? css`
        flex: 1;
    ` : css`
        flex: 0;
    `}
`