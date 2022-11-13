import styled from 'styled-components'

export const ConfirmOrderStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  margin-top: 1rem;
  width: 28rem;

  button[type='submit'] {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;

    padding: 0.75rem 0.5rem;
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    border: 0;

    &:disabled {
      background: ${(props) => props.theme['yellow-700']};
      cursor: not-allowed;
    }

    &:not(:disabled) {
      cursor: pointer;
      background: ${(props) => props.theme['yellow-500']};
    }

    &:not(:disabled):hover {
      cursor: pointer;
      background: ${(props) => props.theme['yellow-700']};
    }
  }
`

export const SubTotalStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
`

export const TotalStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerOrder = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
