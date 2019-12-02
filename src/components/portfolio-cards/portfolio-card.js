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
  transition: 200ms all ease-out;
  display: flex;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 5px 35px -8px #ddd;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 5px 10px 40px -8px #ddd;
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

const CardBody = styled.p`
  font-size: 15px;
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
  /* justify-content: space-between; */

  li {
    padding: 8px 12px;
    margin: 4px;
    font-size: 0.7rem;
    background-color: #eef0f7;
    border-radius: 4px;
    flex-shrink: 0;
  }
`

export default ({ data }) => {
  const { title, description, highlights, link, image } = data
  const PortfolioImage = image
  return (
    <PortfolioCardContainer>
      <PortfolioCard href={link} target="_blank">
        <CardImageContainer>
          <PortfolioImage />
        </CardImageContainer>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardBody>{description}</CardBody>
          <HighlightsList>
            {highlights.map((highlight, i) => (
              <li key={`highlight-${i}`}>{highlight}</li>
            ))}
          </HighlightsList>
        </CardContent>
      </PortfolioCard>
    </PortfolioCardContainer>
  )
}
