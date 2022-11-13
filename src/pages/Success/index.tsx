import { CurrencyDollar, Timer, MapPin } from 'phosphor-react'
import { useContext } from 'react'
import DeliveryCoffeImg from '../../assets/delivery.svg'
import { CoffeDelivery } from '../../Context/ContextProvider'
import { SuccessContainerStyle, ContentMainStyle, CardStyle } from './style'

export function Success() {
  const { getAdressUser } = useContext(CoffeDelivery)

  const adressUser = getAdressUser()

  return (
    <SuccessContainerStyle>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </header>

      <ContentMainStyle>
        <section>
          <CardStyle backgroundIcon="purple">
            <MapPin size={20} className="icon" />
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {adressUser.street}, {adressUser.number}
                </strong>
              </span>
              <span>
                {adressUser.adress} - {adressUser.city}, {adressUser.state}
              </span>
            </div>
          </CardStyle>

          <CardStyle backgroundIcon="yellow">
            <Timer size={20} className="icon" />
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </CardStyle>

          <CardStyle backgroundIcon="yellow-dark">
            <CurrencyDollar size={20} className="icon" />
            <div>
              <span>Pagamento na entrega</span>
              <strong>{adressUser.current}</strong>
            </div>
          </CardStyle>
        </section>

        <img src={DeliveryCoffeImg} alt="" />
      </ContentMainStyle>
    </SuccessContainerStyle>
  )
}
