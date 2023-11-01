import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { IconCircle } from "../../components/iconCircle";
import { CardFlexContent, CardOrderFinished, Container } from "./styles"
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function OrderFinished() {

    const {orders, lastOrder, cart} = useContext(OrderContext);

    function getPaymentLegibleString(): string{
        switch (lastOrder?.payment){
            case "credit":
                return "Cartão de crédito"
            case "debit":
                return "Cartão de débito"
            case "money":
                return "Dinheiro"
            default:
                return "Dinheiro"
        }
    }

    return (

        <Container>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você</h2>
            </div>

            <div>
                <CardOrderFinished
                    width={"32.8rem"}
                    height={"auto"}
                    background-color={"background"}
                    $shape-bottom-left-corner={true}
                    $shape-top-right-corner={true}
                    $hasborder={true}
                    $isbordergradient={true}>
                    <CardFlexContent>
                        <div>
                            <IconCircle background-color="purple" icon={<MapPin />} color="white" text="" />
                            <div>
                                <p>Entrega em <strong>{`${lastOrder?.customer.street}, ${lastOrder?.customer.number}`}</strong></p>
                                <span>{`${lastOrder?.customer.neighborhood} - ${lastOrder?.customer.city}, ${lastOrder?.customer.state}`}</span>
                            </div>
                        </div>
                        <div>
                            <IconCircle background-color="yellow" icon={<Timer />} color="white" text="" />
                            <div>
                                <p>Previsão de entrega</p>
                                <span><strong>20 min - 30 min </strong></span>
                            </div>
                        </div>
                        <div>
                            <IconCircle background-color="yellow-dark" icon={<CurrencyDollar />} color="white" text="" />
                            <div>
                                <p>Pagamento na entrega</p>
                                <span><strong>{getPaymentLegibleString()}</strong></span>
                            </div>
                        </div>
                    </CardFlexContent>
                </CardOrderFinished>

                <img src="/src/assets/Illustration.svg" />
            </div>
        </Container>

    );
}