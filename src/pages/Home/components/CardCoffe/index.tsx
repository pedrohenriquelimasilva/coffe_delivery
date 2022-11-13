import { ShoppingCart, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { InputAmountCoffe } from '../../../../components/InputAmountCoffe'
import { CoffeDelivery, CoffeProps } from '../../../../Context/ContextProvider'

import {
  AddCoffeInCartStyle,
  ArticleCoffeProductStyle,
  PriceAndAmountProductStyle,
  PriceProductStyle,
  StatusCoffeStyle,
  TitleCardStyle,
} from './style'

interface CardCoffeProps {
  coffeExist: boolean
  coffe: CoffeProps
}

export function CardCoffe({ coffe, coffeExist }: CardCoffeProps) {
  const [valueInputNumber, setValueInputNumber] = useState(1)

  const { addCoffeInCart, removeCoffeInCart, convertCurrency } =
    useContext(CoffeDelivery)

  function modifyValueInput(operation: boolean) {
    setValueInputNumber((state) => {
      if (operation) {
        return state + 1
      } else if (!operation && state > 1) {
        return state - 1
      }
      return state
    })
  }

  function handleAddCoffeInCart() {
    toast.success('Café adicionado com sucesso!', {
      position: toast.POSITION.TOP_LEFT,
    })
    addCoffeInCart({ ...coffe, amountSelect: valueInputNumber })
  }

  return (
    <ArticleCoffeProductStyle>
      <img src={coffe.url} alt="" />
      <StatusCoffeStyle>
        {coffe.status.map((status) => (
          <strong key={status}>{status}</strong>
        ))}
      </StatusCoffeStyle>

      <TitleCardStyle>
        <strong>{coffe.type}</strong>
        <span>{coffe.description}</span>
      </TitleCardStyle>

      <PriceAndAmountProductStyle>
        <PriceProductStyle>
          <span>R$</span>
          <strong>{convertCurrency(coffe.price, valueInputNumber)}</strong>
        </PriceProductStyle>

        <AddCoffeInCartStyle>
          <InputAmountCoffe
            valueInput={valueInputNumber}
            handleAmountInputCoffe={modifyValueInput}
          />

          {coffeExist ? (
            <button type="button" onClick={() => removeCoffeInCart(coffe)}>
              <Trash size={20} weight="fill" />
            </button>
          ) : (
            <button type="button" onClick={handleAddCoffeInCart}>
              <ShoppingCart size={20} weight="fill" />
            </button>
          )}
        </AddCoffeInCartStyle>
      </PriceAndAmountProductStyle>
    </ArticleCoffeProductStyle>
  )
}
