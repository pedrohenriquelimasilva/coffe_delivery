import CoffeDeliveryImage from '../../assets/showCoffeLogo.svg'
import {
  HomeLandStyled,
  ContentStyle,
  MackStatusCoffeStyle,
  MainContainerStyle,
} from './style'

import { useContext } from 'react'
import { CardCoffe } from './components/CardCoffe'
import { coffesAvaliable } from '../../coffes'
import { CoffeDelivery } from '../../Context/ContextProvider'
import { StaticDelivery } from './components/StaticDelivery'

export function Home() {
  const { coffeInCart } = useContext(CoffeDelivery)
  return (
    <HomeLandStyled>
      <ContentStyle>
        <MackStatusCoffeStyle>
          <div className="titlesPage">
            <h1>Encontre o café perfeito para qualquer hora do dia </h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>

          <StaticDelivery />
        </MackStatusCoffeStyle>

        <img src={CoffeDeliveryImage} alt="Demostração do coffe delivery" />
      </ContentStyle>

      <MainContainerStyle>
        <h2>Nossos cafés</h2>

        <div>
          {coffesAvaliable.map((coffe) => {
            if (coffe.inventory > 0) {
              // return coffe select
              const coffeExisteInCart = coffeInCart.find((coffeExist) => {
                return coffe.id === coffeExist.id
              })

              if (coffeExisteInCart) {
                return (
                  <CardCoffe
                    key={coffeExisteInCart.id}
                    coffe={coffe}
                    coffeExist={true}
                  />
                )
              }
            }

            return <CardCoffe key={coffe.id} coffe={coffe} coffeExist={false} />
          })}
        </div>
      </MainContainerStyle>
    </HomeLandStyled>
  )
}
