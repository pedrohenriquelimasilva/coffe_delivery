import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderStyled, NavegationStyled } from './style'
import LogoCoffeDeliveryImg from '../../assets/coffeLogo.svg'
import { useContext } from 'react'
import { CoffeDelivery } from '../../Context/ContextProvider'

export function Header() {
  const { coffeInCart, getAdressUser } = useContext(CoffeDelivery)

  const adressUser = getAdressUser()

  return (
    <HeaderStyled>
      <NavLink to="/" end title="Coffe Delivery">
        <img src={LogoCoffeDeliveryImg} alt="" />
      </NavLink>
      <NavegationStyled>
        <span>
          <MapPin size={20} weight="fill" />{' '}
          {adressUser.city ? `${adressUser.city}, ${adressUser.state}` : ''}
        </span>
        <NavLink to="/checkout" end title="Carrinho" className="link">
          {coffeInCart.length ? (
            <>
              <ShoppingCart
                size={20}
                weight="fill"
                className="amount-itens-in-cart"
              />
              <span>{coffeInCart.length}</span>
            </>
          ) : (
            <ShoppingCart size={20} weight="fill" />
          )}
        </NavLink>
      </NavegationStyled>
    </HeaderStyled>
  )
}
