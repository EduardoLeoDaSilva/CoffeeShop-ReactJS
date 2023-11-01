import { CardContainer, CardContainerProps } from "./styles";

interface CardProps extends CardContainerProps {
    children: any;
}

export function Card(
    { children,
        ...props }: CardProps) {
    return (
        <CardContainer
            $shape-bottom-left-corner={props["$shape-bottom-left-corner"] ?? false}
            $shape-bottom-right-corner={props["$shape-bottom-right-corner"] ?? false}
            $shape-top-left-corner={props["$shape-top-left-corner"] ?? false}
            $shape-top-right-corner={props["$shape-top-right-corner"] ?? false}
            background-color={props["background-color"]}
            $hasborder={props.$hasborder}
            $isbordergradient={props.$isbordergradient}
            height={props.height}
            width={props.width}>
            {
                children
            }
        </CardContainer>
    )
}