import { ReactNode } from 'react';
import { styled } from 'styled-components'

type Colors = 'yellow-dark' |
'yellow' |
'yellow-light' |
'purple-dark' |
'purple' |
'purple-light' |
'base-title' |
'base-subtitle' |
'base-text' |
'base-label' |
'base-hover' |
'base-button' |
'base-input' |
'base-card' |
'background' |
'white';

export interface ButtonContainerProps {
    text?: string;
    'background-color': Colors
    color: Colors
    'hover-color': Colors;
    icon?: ReactNode;
    'selected-color'?: Colors;
    'border-color'?: Colors;
    onClick?: ()=> void;
    htmlFor?: string;
}

export const ButtonNumberBadge = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme.white};
    font-size: 0.75rem;
    font-family: 'Roboto';
    top: -10%;
    right: -10%;
    border-radius: 100%;
`

export const BaseButton = styled.button<ButtonContainerProps>`
    position: relative;
    background-color: ${props => props.theme[props['background-color']]};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: none;
    border-style: none;
    color: ${props => props.theme[props.color]};;
`
export const SelectButton = styled.label<ButtonContainerProps>`
    position: relative;
    background-color: ${props => props.theme[props['background-color']]};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: none;
    border-style: none;
    color: ${props => props.theme[props.color]};;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding: 1rem;
    width: 100%;
    display: flex;
    gap: 1rem;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme[props['hover-color']]};
    }
`;

export const PrimaryButton = styled(BaseButton)`
    font-size: 0.87rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding: 0.75rem 0.5rem;
    display: inline-flex;

    &:hover {
        background-color: ${props => props.theme[props['hover-color']]};
    }
`;

export const SecondaryButton = styled(BaseButton)`
    font-size: 0.87rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding: 0 0.5rem;
    display: inline-flex;
    gap: 0.5rem;

    &:hover {
        background-color: ${props => props.theme[props['hover-color']]};
    }
`;

export const CardButton = styled(BaseButton)`
    font-size: 0.87rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding: 0.5rem 0.5rem;
    display: inline-flex;

    &:hover {
        background-color: ${props => props.theme[props['hover-color']]};
    }

    svg{
        width: 22px;
        height: 22px;
    }
`;