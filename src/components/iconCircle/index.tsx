import { ReactNode } from "react";
import { Circle, IconCircleContainer } from "./styles";

interface IconCircleProps {
    icon: ReactNode
    'background-color': 'white' | 'purple' | 'yellow' | 'yellow-dark' | 'base'
    color: 'white' | 'purple' | 'yellow' | 'yellow-dark' | 'base'
    text: string;
}

export function IconCircle({ icon, color, ...props }: IconCircleProps) {
    return (
        <IconCircleContainer>
            <Circle background-color={props["background-color"]} color={color}>
                {icon}
            </Circle>

            <p>{props.text}</p>
        </IconCircleContainer>
    );
}