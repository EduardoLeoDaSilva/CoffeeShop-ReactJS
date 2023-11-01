import { css, styled } from 'styled-components';

export interface CardContainerProps {
    $hasborder?: boolean;
    $isbordergradient?: boolean;
    borderColor?: string;
    ['$shape-bottom-right-corner']?: boolean;
    ['$shape-bottom-left-corner']?: boolean;
    ['$shape-top-right-corner']?: boolean;
    ['$shape-top-left-corner']?: boolean;
    width: string;
    height: string;
    'background-color': 'yellow-dark'| 'yellow'| 'yellow-light'| 'purple-dark'| 'purple'| 'purple-light'| 'base-title'| 'base-subtitle'| 'base-text'| 'base-label'| 'base-hover'| 'base-button'| 'base-input'| 'base-card'| 'background'| 'white' ;
}

export const CardContainer = styled.div<CardContainerProps>`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 1.25rem;
    border-style: ${props => props.$hasborder ? 'solid': 'none'};
    border-width: ${props => props.$hasborder ? '2px': '0'};
    border-color: ${props => props.$hasborder ? 'transparent': '0'};
    background-color: ${props => props.theme[props['background-color']]};
    background: ${props => props.$isbordergradient ? css`linear-gradient(white, white) padding-box, linear-gradient(${props.theme.yellow}, ${props.theme.purple}) border-box` : 'transparent' };

    ${props => {
        if (props['$shape-bottom-right-corner']) {
            return css`
                border-bottom-right-radius: 20%;
            `
        }
    }}

    ${props => {

        if (props['$shape-bottom-left-corner']) {
            return css`
            border-bottom-left-radius: 20%;
        `
        }
    }}

    ${props => {
        if (props['$shape-top-right-corner']) {
            return css`
                    border-top-right-radius:  20%;
                `
        }
    }}

    ${props => {
        if (props['$shape-top-left-corner']) {
            return css`
                border-top-left-radius:  20%;
                `
        }
    }}

`