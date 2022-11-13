import styled from 'styled-components'

export const ContenainerStyle = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
`

export const ContentMainStyle = styled.main`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;
`

export const TitleCampStyle = styled.h2`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
`

const colorIcon = {
  yellow: 'yellow-700',
  purple: 'purple-500',
} as const

interface AdressInformStylePropsColor {
  iconColor: keyof typeof colorIcon
}

export const AdressInformStyle = styled.div<AdressInformStylePropsColor>`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  gap: 0.5rem;

  color: ${(props) => props.theme[colorIcon[props.iconColor]]};

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    strong {
      font-weight: 400;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }
    span {
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FormContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const ContentFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .cep-adreess {
    width: 12.5rem;
  }

  .complement {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .data-city {
    display: grid;
    grid-template-columns: 1.1fr 1.5fr 0.4fr;
    gap: 0.75rem;
  }
`

export const BaseInput = styled.input`
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  padding: 0.75rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
`

export const Currency = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const InputAdjunct = styled.div`
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  flex: 1;
  background: ${(props) => props.theme['base-input']};
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};

  label {
    display: flex;
    align-items: center;
  }

  span {
    padding-right: 0.75rem;
    font-style: italic;
  }
`

export const FormOfPaymentStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;

    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    padding: 1rem;
    color: ${(props) => props.theme['purple-500']};
    cursor: pointer;
    span {
      text-transform: uppercase;
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const BaseInputCheckebox = styled.input`
  visibility: hidden;
  overflow: hidden;
  position: absolute;

  // erro ao colocar o hover no botão
  &:checked ~ label {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-300']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
