import styled from 'styled-components'

export const ArticleCoffeProductStyle = styled.article`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem 1.5rem;
  align-items: center;
  background: ${(props) => props.theme['base-card']};

  img {
    max-width: 7.5rem;
    margin-top: -2.5rem;
  }
`

export const StatusCoffeStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.625rem;
  line-height: 1.3;
  text-transform: uppercase;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  strong {
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
  }
`

export const TitleCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 1.25rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const PriceAndAmountProductStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 1.5rem;
`

export const PriceProductStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.25rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const AddCoffeInCartStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button[type='button'] {
    border: 0;
    border-radius: 6px;
    padding: 0.5rem;
    width: 2.375rem;
    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`
