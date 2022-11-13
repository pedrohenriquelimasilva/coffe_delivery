import styled from 'styled-components'

export const HomeLandStyled = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`

export const ContentStyle = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  padding: 5.75rem 0;

  @media (max-width: 760px) {
    flex-direction: column;
    flex: 1;
  }
`

export const MackStatusCoffeStyle = styled.div`
  .titlesPage {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4.125rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme['base-title']};
      align-self: stretch;
    }

    span {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
      font-stretch: 100;
      align-self: stretch;
    }
  }
`

export const MainContainerStyle = styled.main`
  & > div {
    display: grid;
    margin: 2.5rem 0;
    gap: 2rem;
    grid-template-columns: repeat(4, 16rem);
  }

  @media (max-width: 760px) {
    & > div {
      grid-template-columns: 1fr 1fr;
    }
  }
`
