import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

export interface CoffeProps {
  id: string
  price: number
  amount: number
  type: string
  status: string[]
  url: string
  inventory: number
  description: string
}

export interface CoffeInCartProps extends CoffeProps {
  amountSelect: number
}

export interface AdressUserProps {
  cep: string
  street: string
  number: string
  adjunct?: string
  adress: string
  city: string
  state: string
  current: string
}

interface CoffeDeliveryProps {
  coffeInCart: CoffeInCartProps[]
  addCoffeInCart: (addCoffe: CoffeInCartProps) => void
  removeCoffeInCart: (removeCoffe: CoffeProps) => void
  convertCurrency: (currency: number, valueInputNumber: number) => string
  diferencyCoffe: (operation: boolean, id: string) => void
  handleModifyAmountCoffe: (value: number, id: string) => void
  confirmeAdressUser: (adress: AdressUserProps) => void
  getAdressUser: () => AdressUserProps
}

export const CoffeDelivery = createContext({} as CoffeDeliveryProps)

interface CoffeDeliveryProviderProps {
  children: ReactNode
}

export function CoffeDeliveryProvider({
  children,
}: CoffeDeliveryProviderProps) {
  const [coffeInCart, setCoffeInCart] = useState<CoffeInCartProps[]>([])

  function confirmeAdressUser(adress: AdressUserProps) {
    try {
      const parseAdress = JSON.stringify(adress)

      localStorage.setItem('@coffe-delivery-adress:v0.0.1', parseAdress)
    } catch (err) {
      throw new Error()
    }
  }

  function getAdressUser() {
    try {
      const adress = localStorage.getItem('@coffe-delivery-adress:v0.0.1')

      const parseAdress = JSON.parse(adress!)

      return parseAdress
    } catch (err) {
      throw new Error()
    }
  }

  function addCoffeInCart(addCoffe: CoffeInCartProps) {
    setCoffeInCart((state) => {
      return [...state, { ...addCoffe }]
    })
  }

  function handleModifyAmountCoffe(value: number, id: string) {
    const newArrayCoffes = coffeInCart.map((state) => {
      if (id === state.id) return { ...state, amountSelect: value }
      return state
    })

    setCoffeInCart(newArrayCoffes)
  }

  function diferencyCoffe(operation: boolean, id: string) {
    const updateCoffes = coffeInCart.map((state) => {
      if (operation && state.id === id) {
        return { ...state, amountSelect: (state.amountSelect += 1) }
      } else if (!operation && state.amountSelect > 0 && state.id === id) {
        return { ...state, amountSelect: (state.amountSelect -= 1) }
      }

      return state
    })
    setCoffeInCart(updateCoffes)
  }

  function convertCurrency(currency: number, valueInputNumber: number) {
    return (currency * valueInputNumber).toFixed(2).replace('.', ',')
  }

  function removeCoffeInCart(removeCoffe: CoffeProps) {
    setCoffeInCart((state) => {
      return state.filter((coffe) => {
        return coffe.id !== removeCoffe.id
      })
    })

    toast.error('Café removido', {
      position: toast.POSITION.TOP_LEFT,
    })
  }

  return (
    <CoffeDelivery.Provider
      value={{
        coffeInCart,
        addCoffeInCart,
        removeCoffeInCart,
        convertCurrency,
        diferencyCoffe,
        handleModifyAmountCoffe,
        confirmeAdressUser,
        getAdressUser,
      }}
    >
      {children}
    </CoffeDelivery.Provider>
  )
}
