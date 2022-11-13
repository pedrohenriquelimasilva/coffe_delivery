import styled from 'styled-components'

export const InputBase = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .icon-minus {
    position: absolute;
    left: 0.5rem;
    bottom: 0.75rem;
    cursor: pointer;
    color: ${(props) => props.theme['purple-500']};

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  .icon-plus {
    position: absolute;
    right: 0.5rem;
    bottom: 0.75rem;
    cursor: pointer;
    color: ${(props) => props.theme['purple-500']};

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  input {
    width: 4.5rem;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    padding: 0.5rem;
    display: flex;
    gap: 0.25rem;
    text-align: center;
  }
`
