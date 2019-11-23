import React from "react"
import styled from "styled-components"
import SkillCard from "./skill-card"

const SkillCards = styled.section`
  margin: 0 auto;
  padding: 32px 32px;
  list-style: none;
  display: grid;
  /* overflow: hidden; */
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 32px;
    padding: 24px 24px;
  }

  @media (max-width: 500px) {
    padding: 24px 8px;
  }
`

export default ({ skills }) => (
  <SkillCards>
    {skills.map((skillSet, i) => (
      <SkillCard
        key={`skill-set-${i}`}
        skills={skillSet.skills}
        headerText={skillSet.header}
      />
    ))}
  </SkillCards>
)
