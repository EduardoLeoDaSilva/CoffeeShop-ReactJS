import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react";
import { Banner, BannerBoxContent, BannerFirstSection, CardBadgesContainer, CardContent, CardInventoryInputContainer, CardProductInfo, ImgContainer, Perks, ProductList, ProductSection, TypeSpan } from "./styles";
import { IconCircle } from "../../components/iconCircle";
import { coffees, CoffeeAPI } from "../../data/fakeCoffeData";
import { Card } from "../../components/card";
import { Button } from "../../components/button";
import { useContext, useEffect, useState } from "react";
import { produce } from 'immer'
import { OrderContext } from "../../contexts/OrderContext";

interface QuantType {
    id: string;
    quant: number
}

export function ProductPage() {


    let { addCartItem } = useContext(OrderContext);

    let [coffeeState, setCoffeeState] = useState<CoffeeAPI[]>([])
    let [quantState, setQuantState] = useState<QuantType[]>([])
    //simulating a return from API
    useEffect(() => {
        let coffeesInitialQuantity = coffees.map((x) => { return { id: `quant-${x.id}`, quant: 1 } })
        setQuantState(coffeesInitialQuantity)
        setCoffeeState(coffees)
    }, [])

    function handleChangeQuantityRequest(coffee: CoffeeAPI, type: string) {
        let result = produce(quantState, (draft) => {
            draft.forEach(element => {

                if (type == "ADD" && element.id == `quant-${coffee.id}`) {
                    element.quant += 1;
                }

                if (type == "REMOVE" && element.id == `quant-${coffee.id}`) {
                    element.quant -= 1;
                }

                if (element.quant <= 0) {
                    element.quant = 1;
                }
            });
        })
        setQuantState(result);
    }

    function handleItemToCart(coffee: CoffeeAPI) {
        const quantItem = quantState.find((x) => x.id == `quant-${coffee.id}`)
        addCartItem(
            {
                id: coffee.id.toString(),
                image: coffee.image,
                name: coffee.name,
                quant: quantItem?.quant ?? 1,
                price: coffee.price
            })
    }

    return (
        <>
            <Banner>
                <BannerBoxContent>
                    <BannerFirstSection>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        <Perks>
                            <IconCircle background-color="yellow-dark" color="white" icon={<ShoppingCart />} text="Compra simples e segura" />
                            <IconCircle background-color="base" color="white" icon={<Package />} text="Embalagem mantém o café intacto" />
                            <IconCircle background-color="yellow" color="white" icon={<Timer />} text="Entrega rápida e rastreada" />
                            <IconCircle background-color="purple" color="white" icon={<Coffee />} text="O café chega fresquinho até você" />
                        </Perks>
                    </BannerFirstSection>
                    <img src="/src/assets/Imagem.svg" />
                </BannerBoxContent>
            </Banner>
            <ProductSection>
                <h2>Nossos cafés</h2>
                <ProductList>
                    {
                        coffeeState.map(x =>
                            <Card key={x.id}
                                $shape-bottom-left-corner={true}
                                $shape-top-right-corner={true}
                                background-color="base-card"
                                height="19.37rem"
                                width="16rem"
                            >
                                <CardContent>

                                    <ImgContainer>
                                        <img src={x.image} />
                                    </ImgContainer>
                                    <CardBadgesContainer>
                                        {x.types.map(type => <TypeSpan key={`${x.id}-${type}`} color="yellow-dark" background-color="yellow-light">{type}</TypeSpan>)}
                                    </CardBadgesContainer>

                                    <div>
                                        <h2>{x.name}</h2>
                                        <p>{x.description}</p>
                                    </div>

                                    <CardProductInfo>

                                        <span>
                                            {x.price.toFixed(2).replace('.', ',')}</span>

                                        <div>
                                            <CardInventoryInputContainer>
                                                <button onClick={() => handleChangeQuantityRequest(x, "ADD")}><Plus weight="bold" /></button>
                                                <input readOnly value={quantState.find((q) => q.id == `quant-${x.id}`)!.quant} type="number" />
                                                <button onClick={() => handleChangeQuantityRequest(x, "REMOVE")}><Minus weight="bold" /></button>
                                            </CardInventoryInputContainer>
                                            <Button onClick={() => handleItemToCart(x)} background-color="purple-dark" color="base-card" styleType="CARD" icon={<ShoppingCart weight="bold" />} hover-color="purple" />
                                        </div>
                                    </CardProductInfo>
                                </CardContent>
                            </Card>
                        )
                    }
                </ProductList>
            </ProductSection>
        </>
    );
}