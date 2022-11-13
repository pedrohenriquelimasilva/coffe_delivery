import styled from 'styled-components'

export const CoffeCartStyle = styled.article`
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  .total-amount-coffe {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;

    .coffe-data {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    .amount-coffe {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button[type='button'] {
        display: flex;
        color: ${(props) => props.theme['purple-500']};
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        border: 0;
        gap: 0.25rem;
        cursor: pointer;

        span {
          color: ${(props) => props.theme['base-text']};
          text-transform: uppercase;
          font-size: 0.75rem;
        }
      }
    }
  }
`
