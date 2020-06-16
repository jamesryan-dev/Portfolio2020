import styled from 'styled-components'

export const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direcrion: row;
  width: 100%;
  @media (max-width: 693px) {
    flex-direction: column;
  }
`
