import styled from "styled-components"

export const CardItem = styled.div`
    display: flex; 
    padding: 0.5rem 0.25rem;
    justify-content: space-between;
    &>span{
        font-family: 'Roboto';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }

    &>span::before{
        content: 'R$ ';
    }

`

export const CardItemImage = styled.img`
    width: 4rem;
    height: 4rem;
`

export const CardItemDetailsContainer = styled.div`
    display: flex;
    gap: 1.25rem;
`
export const CardItemDetails = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-direction: column;

    &>h2{
        font-family: 'Roboto';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const CardItemActions = styled.div`
    display: flex;
    gap: 0.5rem;
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