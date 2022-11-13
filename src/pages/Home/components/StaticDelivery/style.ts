import styled from 'styled-components'

export const PropsCoffeDeliveryStyle = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1.25rem;

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    flex: 1;
  }
`

const StatusColor = {
  purple: 'purple-500',
  yellow: 'yellow-500',
  gray: 'base-text',
  'yellow-dark': 'yellow-700',
} as const

interface StatusColorProps {
  colorBase: keyof typeof StatusColor
}

export const StaticDeliveryStyle = styled.span<StatusColorProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};

  .icon {
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 999px;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme[StatusColor[props.colorBase]]};
  }
`
