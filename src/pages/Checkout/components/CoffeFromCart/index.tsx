import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { InputAmountCoffe } from '../../../../components/InputAmountCoffe'
import {
  CoffeDelivery,
  CoffeInCartProps,
} from '../../../../Context/ContextProvider'
import { CoffeCartStyle } from './style'

interface CoffeFromCartProps {
  coffe: CoffeInCartProps
}

export function CoffeFromCart({ coffe }: CoffeFromCartProps) {
  const { diferencyCoffe, removeCoffeInCart, convertCurrency } =
    useContext(CoffeDelivery)

  function handleAmountInputCoffe(operation: boolean) {
    diferencyCoffe(operation, coffe.id)
  }

  return (
    <CoffeCartStyle>
      <img src={coffe.url} alt="" />

      <div className="total-amount-coffe">
        <div className="coffe-data">
          <span>{coffe.type}</span>
          <strong>R$ {convertCurrency(coffe.price, coffe.amountSelect)}</strong>
        </div>
        <div className="amount-coffe">
          <InputAmountCoffe
            handleAmountInputCoffe={handleAmountInputCoffe}
            valueInput={coffe.amountSelect}
          />
          <button type="button" onClick={() => removeCoffeInCart(coffe)}>
            <Trash size={20} />
            <span>Remover</span>
          </button>
        </div>
      </div>
    </CoffeCartStyle>
  )
}
