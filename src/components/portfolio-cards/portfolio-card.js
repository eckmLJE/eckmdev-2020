import React from 'react'
import styled from 'styled-components'

const PortfolioCardContainer = styled.div`
  position: relative;
  padding: 0.75rem;
`

const PortfolioCard = styled.a`
  position: relative;
  padding: 1.5rem;
  width: 100%;
  height: 250px;
  background-color: #eef0f7;
  border-radius: 10px;
  transition: 300ms all ease-out;
  display: flex;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 5px 35px -8px #ddd;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    width: 300px;
    height: 500px;
    margin: 0 auto;
  }
`

const CardImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  height: 100%;

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    width: 100%;
    height: 35%;
  }
`

const CardImage = styled.img`
  position: relative;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-color: transparent;
  margin: 0;
  color: transparent;
`

const CardContent = styled.div`
  position: relative;
  width: 65%;
  margin-left: calc(35% + 0.75rem);
  height: 100%;
  padding-bottom: 50px;

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    width: 100%;
    margin-left: 0;
    margin-top: calc(175px + 12px);
    height: 65%;
  }
`

const CardTitle = styled.h2`
  margin: 0;
  padding-bottom: 0.5rem;
`

const HighlightsList = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  li {
    padding: 0.4rem 0.4rem;
    margin: 0;
    font-size: 0.7rem;
    &:first-child {
      padding-left: 0;
    }
  }
`

export default ({ data }) => {
  const { title, description, highlights, link, image } = data
  return (
    <PortfolioCardContainer>
      <PortfolioCard href={link} target="_blank">
        <CardImageContainer>
          <CardImage src={image} />
        </CardImageContainer>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <p>{description}</p>
          <HighlightsList>
            {highlights.map(highlight => (
              <li>{highlight}</li>
            ))}
          </HighlightsList>
        </CardContent>
      </PortfolioCard>
    </PortfolioCardContainer>
  )
}
