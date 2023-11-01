import { styled } from 'styled-components'

interface IconCircleBoxProps {
    'background-color': 'white' | 'purple' | 'yellow' | 'yellow-dark' | 'base';
    'color': 'white' | 'purple' | 'yellow' | 'yellow-dark' | 'base';
}

const iconColorMapping = {
    'white': 'white',
    'purple': 'purple',
    'yellow': 'yellow',
    'yellow-dark': 'yellow-dark',
    'base': 'base-text'
}

export const Circle = styled.span<IconCircleBoxProps>`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 100%;
    background-color: ${props => props.theme[iconColorMapping[props['background-color']]]};
    color: ${props => props.theme[iconColorMapping[props.color]]};
`

export const IconCircleContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;

    & p{
    text-align: center;

        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        color: ${props => props.theme['base-text']};
    }
`

