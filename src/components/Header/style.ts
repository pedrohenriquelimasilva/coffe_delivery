import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const NavegationStyled = styled.nav`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  span {
    padding: 0.5rem;
    background: ${(props) => props.theme['purple-300']};
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: ${(props) => props.theme['purple-700']};

    font-size: 0.875rem;
    line-height: 1.3;
  }

  .link {
    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-300']};
    border-radius: 6px;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['yellow-700']};

    span {
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      top: -10px;
      right: -10px;
      border-radius: 44px;
      color: ${(props) => props.theme.white};
      font-weight: 700;

      background: ${(props) => props.theme['yellow-700']};
    }
  }
`
