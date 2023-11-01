import { ReactNode } from "react";
import { ButtonContainerProps, ButtonNumberBadge, CardButton, PrimaryButton, SecondaryButton, SelectButton } from "./styles";

interface ButtonProps extends ButtonContainerProps {
    styleType: 'PRIMARY' | 'SECONDARY' | 'CARD' | 'SELECT'
    hasBadge?: boolean;
    numberBadge?: number;
    type?: "button" | "submit" | "reset";
}

export function Button(props: ButtonProps) {
    return (
        <>
            {props.styleType == 'PRIMARY' && (<PrimaryButton onClick={props.onClick} type={props.type} background-color={props["background-color"]} hover-color={props['hover-color']} color={props.color}>{props.icon} {props.text}</PrimaryButton>)}
            {props.styleType == 'SECONDARY' && <SecondaryButton onClick={props.onClick} background-color={props["background-color"]} hover-color={props['hover-color']} color={props.color}>{props.icon} {props.text}</SecondaryButton>}
            {props.styleType == 'CARD' && (<CardButton onClick={props.onClick} background-color={props["background-color"]} hover-color={props['hover-color']} color={props.color}> {props.hasBadge ? <ButtonNumberBadge>{props.numberBadge}</ButtonNumberBadge> : <></>} {props.icon} {props.text}</CardButton>)}
            {props.styleType == 'SELECT' && (<SelectButton htmlFor={props.htmlFor} onClick={props.onClick} background-color={props["background-color"]} hover-color={props['hover-color']} color={props.color}>{props.icon} {props.text}</SelectButton>)}
        </>
    );
}