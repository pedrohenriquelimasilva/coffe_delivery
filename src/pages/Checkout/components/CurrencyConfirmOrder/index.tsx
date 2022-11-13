import { useContext } from 'react'
import { CoffeDelivery } from '../../../../Context/ContextProvider'
import { CoffeFromCart } from '../CoffeFromCart'
import {
  ConfirmOrderStyle,
  ContainerOrder,
  SubTotalStyle,
  TotalStyle,
} from './style'

export function CurrencyCondirmOrder() {
  const { coffeInCart } = useContext(CoffeDelivery)

  const totalPriceCoffes = coffeInCart
    .map((coffe) => coffe.amountSelect * coffe.price)
    .reduce((coffeTotalPrice, acumulator) => {
      return (acumulator += coffeTotalPrice)
    }, 0)

  const shippingCoffe = totalPriceCoffes * 0.1

  function formatTotalPriceCoffes(totalPrice: number) {
    return totalPrice.toFixed(2).replace('.', ',')
  }
  return (
    <ConfirmOrderStyle>
      {coffeInCart.map((coffe) => {
        return <CoffeFromCart key={coffe.id} coffe={coffe} />
      })}
      <ContainerOrder>
        <SubTotalStyle>
          <span>Total de itens</span>
          <span>R$ {formatTotalPriceCoffes(totalPriceCoffes)}</span>
        </SubTotalStyle>
        <SubTotalStyle>
          <span>Entrega</span>
          <span>R$ {formatTotalPriceCoffes(shippingCoffe)}</span>
        </SubTotalStyle>
        <TotalStyle>
          <strong>Total</strong>
          <strong>
            R$ {formatTotalPriceCoffes(totalPriceCoffes + shippingCoffe)}
          </strong>
        </TotalStyle>
      </ContainerOrder>

      {coffeInCart.length ? (
        <button type="submit" form="adress-cliente">
          Confirmar pedido
        </button>
      ) : (
        <button disabled type="submit" form="adress-cliente">
          Confirmar pedido
        </button>
      )}
    </ConfirmOrderStyle>
  )
}
