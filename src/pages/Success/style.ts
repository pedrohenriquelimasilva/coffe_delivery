import styled from 'styled-components'

export const SuccessContainerStyle = styled.div`
  margin-top: 5.25rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  header {
    h1 {
      font-size: 2rem;
      font-weight: 800;
      font-family: 'Baloo 2';
      line-height: 1.3;
      color: ${(props) => props.theme['yellow-700']};
    }
    span {
      font-size: 1.25rem;
      font-weight: 400;
      font-family: 'Roboto';
      font-stretch: 100;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ContentMainStyle = styled.main`
  display: flex;
  align-items: center;
  gap: 5rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2.5rem;
    flex: 1;
    border: 1px solid;
    border-radius: 6px 44px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`

const colorBackground = {
  yellow: 'yellow-500',
  'yellow-dark': 'yellow-700',
  purple: 'purple-500',
} as const

interface CardStyleProps {
  backgroundIcon: keyof typeof colorBackground
}

export const CardStyle = styled.div<CardStyleProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.theme[colorBackground[props.backgroundIcon]]};
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 99px;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
  }
`
