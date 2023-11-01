import { Minus, Plus, Trash } from "phosphor-react";
import { CardInventoryInputContainer, CardItem, CardItemActions, CardItemDetails, CardItemDetailsContainer, CardItemImage } from "./styles";
import { Button } from "../../../../components/button";
import { Divider } from "../../styles";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

interface CardItemProps{
    id: string;
    name:string;
    quant: number;
    price: number;
    image: string;
}

export function CartItem(props: CardItemProps){

    const {updateCartItem, removeCartItem} = useContext(OrderContext);

    return (
        <>
        <CardItem>
        <CardItemDetailsContainer>
            <CardItemImage src={props.image} />
            <CardItemDetails>
                <h2>{props.name}</h2>
                <CardItemActions>
                    <CardInventoryInputContainer>
                        <button onClick={() => updateCartItem({ id: props.id, quant:props.quant +1})}><Plus weight="bold" /></button>
                        <input readOnly value={props.quant} type="number" />
                        <button onClick={() => updateCartItem({ id: props.id, quant:props.quant -1})}><Minus weight="bold" /></button>
                    </CardInventoryInputContainer>
                    <Button onClick={() => removeCartItem(props.id)} styleType={"SECONDARY"} text="Remover" icon={<Trash size={16} color="purple" />} background-color={"base-button"} color={"base-subtitle"} hover-color={"base-hover"} />
                </CardItemActions>
            </CardItemDetails>
        </CardItemDetailsContainer>
        <span>{props.price}</span>

    </CardItem>
    <Divider />
    </>
    );
}