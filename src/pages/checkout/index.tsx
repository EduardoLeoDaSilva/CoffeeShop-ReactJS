import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "phosphor-react";
import { Button } from "../../components/button";
import { CartPrice, CartPriceSummary, CheckoutCard, CheckoutContainer, CheckoutInput, CheckoutSection, Divider, TitleWithSubTitle } from "./styles";
import { CartItem } from "./components/CartItem";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from "react";
import {  OrderContext } from "../../contexts/OrderContext";
import { useNavigate } from "react-router-dom";



const formSchema = zod.object({
    zipcode: zod.string().regex(/[0-9]+-[0-9]+/, 'CEP inválido').min(1),
    street: zod.string().min(1),
    number: zod.string().min(1),
    complement: zod.string().min(1),
    neighborhood: zod.string().min(1),
    city: zod.string().min(1),
    state: zod.string().min(1),
    payment: zod.enum(['credit', 'debit', 'money'], { invalid_type_error: 'Tipo inválido de dados' })
}, {})



export function Checkout() {

    const navigator = useNavigate();
    const { register, handleSubmit, formState, getValues } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            zipcode: '',
            street: '',
            number: '',
            complement: '',
            neighborhood: '',
            city: '',
            state: '',
            payment: '',
        },
    })

    const { cart, orders, lastOrder, addOrder, clearCart } = useContext(OrderContext)

    function handleFormSubmit(form: any) {
        addOrder({
            customer: { ...form, orders: []},
            freight: 3.50,
            id: new Date().getMilliseconds().toString(),
            items: [...cart!.items],
            payment: form.payment,
            total: cart!.total
        })
        clearCart();
    
        navigator('/order-finished');
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <CheckoutContainer>
                <CheckoutSection>
                    <h2>Complete seu pedido</h2>
                    <CheckoutCard>
                        <TitleWithSubTitle>
                            <MapPin size={22} />
                            <div>
                                <h2> Endereços de Entrega</h2>
                                <span>Informe o endereço onde deseja receber seu pedido</span>
                            </div>
                        </TitleWithSubTitle>
                        <CheckoutInput {...register("zipcode")} type="string" max-width="12.5rem" placeholder="CEP" />
                        <CheckoutInput {...register("street")} type="string" placeholder="Rua" />

                        <div>
                            <CheckoutInput {...register("number")} type="string" placeholder="Número" />
                            <CheckoutInput {...register("complement")} type="string" $expand={true} placeholder="Complemento" />
                        </div>
                        <div>
                            <CheckoutInput {...register("neighborhood")} type="string" placeholder="Bairro" />
                            <CheckoutInput {...register("city")} type="string" placeholder="Cidade" />
                            <CheckoutInput {...register("state")} type="string" $expand={true} placeholder="UF" />
                        </div>


                    </CheckoutCard>

                    <CheckoutCard>

                        <TitleWithSubTitle>
                            <CurrencyDollar size={22} />

                            <div>
                                <h2> Pagamento</h2>
                                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                            </div>
                        </TitleWithSubTitle>
                        <div>
                            <input readOnly  id="credit" {...register('payment')} value={'credit'} type="radio" />
                            <Button htmlFor="credit" background-color="base-button" color="base-text" text="Cartão de crédito" styleType="SELECT" selected-color="purple-light" border-color="purple" icon={<CreditCard color="purple" size={16} />} hover-color="base-hover" />
                            <input readOnly id="debit"  {...register('payment')} value={'debit'} type="radio" />
                            <Button htmlFor="debit" background-color="base-button" color="base-text" text="Cartão de débito" styleType="SELECT" selected-color="purple-light" border-color="purple" icon={<Bank size={16} color="purple" />} hover-color="base-hover" />
                            <input readOnly id="money"  {...register('payment')} value={'money'} type="radio" />
                            <Button htmlFor="money" background-color="base-button" color="base-text" text="Dinheiro" styleType="SELECT" selected-color="purple-light" border-color="purple" icon={<Money size={16} color="purple" />} hover-color="base-hover" /> 
                        </div>
                    </CheckoutCard>
                </CheckoutSection>
                <CheckoutSection>
                    <h2>Cafés selecionados</h2>

                    <CheckoutCard>

                        {cart?.items.map((x) => {
                            return <CartItem key={x.id} id={x.id} name={x.name} quant={x.quant} price={x.price} image={x.image} />
                        })}


                        <CartPriceSummary>
                            <p>Total de itens</p>
                            <CartPrice>R$ {cart?.total?.toFixed(2) ?? 0}</CartPrice>

                            <p>Entrega</p>
                            <CartPrice>R$ 3,50</CartPrice>

                            <p>Total</p>
                            <CartPrice>R$ {((cart?.total ?? 0) + 3.50).toFixed(2)}</CartPrice>
                        </CartPriceSummary>
                        <Button type="submit" text="Confirmar Pedido" styleType={"PRIMARY"} background-color={"yellow"} color={"white"} hover-color={"yellow-dark"} />
                    </CheckoutCard>
                </CheckoutSection>
            </CheckoutContainer>
        </form>
    );
}