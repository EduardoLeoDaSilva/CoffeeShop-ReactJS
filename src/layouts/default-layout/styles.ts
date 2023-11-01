import {styled} from 'styled-components'

interface HeadSpanProps{
    'icon-color': 'purple' | 'yellow' | 'white';
    'text-color': 'purple' | 'yellow' | 'white'
}

const colorsMapping = {
    'purple': 'purple',
    'yellow': 'yellow',
    'white': 'white',
}

export const Header = styled.header`
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-between;
    width: 100vw;
`

export const HeadSpan = styled.span<HeadSpanProps>`
    padding: 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 0.5rem;
    background-color: ${props => props.theme['purple-light']};
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme[colorsMapping[props['text-color']]]};

    svg {
        width: 22px;
        height: 22px;
        color: ${props =>  props.theme[props['text-color']]};
    }
`

export const ButtonsHeadContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`