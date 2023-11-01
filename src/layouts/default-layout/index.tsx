import { MapPin, ShoppingCart } from "phosphor-react";
import { ButtonsHeadContainer, HeadSpan, Header } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function DefaultLayout() {

    const {cart} = useContext(OrderContext);
    const navigate = useNavigate();
    return (
        <>
            <Header>
                <img src="/src/assets/Logo.svg" />
                <ButtonsHeadContainer>
                    <HeadSpan text-color="purple" icon-color="purple" >
                        <MapPin />
                        <span>Porto Alegre, RS</span>
                    </HeadSpan>
                    <Button onClick={() => navigate('/checkout')} numberBadge={cart?.items ? cart.items.length : 0} hasBadge={cart?.items && cart.items.length > 0}  background-color="yellow-light" color="yellow-dark" styleType="CARD" icon={<ShoppingCart />} hover-color="yellow" />
                </ButtonsHeadContainer>
            </Header>
            <Outlet />
        </>
    );
}