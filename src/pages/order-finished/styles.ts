import styled, { css } from "styled-components";
import { Card } from "../../components/card";
import { CardContainer } from "../../components/card/styles";

export const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding: 5rem 10rem 15rem 10rem;
    flex-direction: column;
    align-items: center;

    &>:nth-child(2){
        display: flex;
        gap: 6.3rem;
    }

    &>div:first-of-type h1{
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme["yellow-dark"]};
        font-size: 2rem;
    }

    &>div:first-of-type h2{
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    & strong{
        font-weight: 700;
    }

    & p, & span{
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
    }

`

export const CardOrderFinished = styled(CardContainer)`
    padding: 2.5rem 2.5rem !important;
    justify-content: space-between;
    display: flex;
    align-items: center;

    ${props => {
        if (props['shape-bottom-right-corner']) {
            return css`
                border-bottom-right-radius: 3rem;
            `
        }
    }}

    ${props => {

        if (props['shape-bottom-left-corner']) {
            return css`
            border-bottom-left-radius: 3rem;
        `
        }
    }}

    ${props => {
        if (props['shape-top-right-corner']) {
            return css`
                    border-top-right-radius:  3rem;
                `
        }
    }}

    ${props => {
        if (props['shape-top-left-corner']) {
            return css`
                border-top-left-radius:  3rem;
                `
        }
    }}

`


export const CardFlexContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &>div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

`