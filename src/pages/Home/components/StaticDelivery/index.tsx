import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { PropsCoffeDeliveryStyle, StaticDeliveryStyle } from './style'

export function StaticDelivery() {
  return (
    <PropsCoffeDeliveryStyle>
      <StaticDeliveryStyle colorBase="yellow-dark">
        <ShoppingCart size={20} className="icon" weight="fill" />
        Compra simples e segura
      </StaticDeliveryStyle>
      <StaticDeliveryStyle colorBase="gray">
        <Package size={20} className="icon" weight="fill" />
        Embalagem mantém o café intacto
      </StaticDeliveryStyle>
      <StaticDeliveryStyle colorBase="yellow">
        <Timer size={20} className="icon" weight="fill" />
        Entega rápida e rastreada
      </StaticDeliveryStyle>
      <StaticDeliveryStyle colorBase="purple">
        <Coffee size={20} className="icon" weight="fill" />O café chega
        fresquinho até você
      </StaticDeliveryStyle>
    </PropsCoffeDeliveryStyle>
  )
}
