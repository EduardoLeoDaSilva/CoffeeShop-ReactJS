import styled from "styled-components";
import { Colors } from '../../styles/Colors'
export const Banner = styled.div`
    display: block;
    background-image: url('/src/assets/Background.svg');
    width: 100%;
    height: 34rem;
    background-size: cover;
    background-blend-mode: difference;
`

export const BannerBoxContent = styled.div`
    padding: 5.75rem 10rem ;
    display: flex;
    gap: 3.5rem;
    justify-content: center;
`

export const BannerFirstSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1{
        font-family: 'Baloo 2', sans-serif;
        font-size: 3rem;
        font-weight: 800;
        font-style: normal;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
        font-style: normal;
    }

`

export const Perks = styled.div`
    margin-top: 3.12rem;
    gap: 1rem;
    display: grid;
    width: fit-content;
    grid-template: 1fr 1fr / 1fr 1fr;
`

export const BannerSecondSection = styled.div`
    display: flex;
`

export const ProductSection = styled.section`
    padding: 2rem 10rem 10rem 10rem;

    &>h2 {
        /* Title/Title L */
        font-family: 'Baloo 2';
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 130%; /* 41.6px */
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 3.75rem;
    }

`
export const ProductList = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`

interface TypeSpanProps {
    'background-color': Colors
    color: Colors
}

export const TypeSpan = styled.span<TypeSpanProps>`
    padding: 0.25rem 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 0.62rem;
    background-color: ${props => props.theme[props['background-color']]};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: ${props => props.theme[props['color']]};


    svg {
        width: 22px;
        height: 22px;
        color: ${props => props.theme[props['color']]};
    }
`



export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    img{
        max-width: 120px;
        max-height: 120px;
        position: absolute;
        top: -8%;
    }



    & h2{
        font-family: 'Baloo 2';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }

    & p{
        font-family: 'Roboto';
        font-size: 0.87rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme["base-label"]};
    }

`

export const ImgContainer = styled.div`
    width: 100%;
    height: 75px;
    display: inline-flex;
    justify-content: center;
    
`

export const CardBadgesContainer = styled.div`
    display: flex;
    gap: 0.25rem;
`

export const CardProductInfo = styled.div`

    display: flex;
    gap: 1.4rem;
    justify-content: center;
    align-items: center;

    & div:nth-child(2){
        display: flex;
        gap: 0.5rem;
    }

    & span:first-child{
        font-size: 1.5rem;
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
        color: ${props => props.theme["base-text"]};

    }

    & span:first-child::before{
        content: 'R$ ';
        text-align: right;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        font-size: 0.75rem;
        color: ${props => props.theme["base-text"]};
    }

`

export const CardInventoryInputContainer = styled.div`
    background-color: ${props => props.theme["base-button"]};
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        background-color: transparent;
        border-style: none;
        outline-style: none;
        padding: 0.5rem;
        width: 30px;
    }

    button {
        background-color: transparent;
        border-style: none;
        line-height: 0%;
        color: ${props => props.theme.purple};
    }
`