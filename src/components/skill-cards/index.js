import React from "react"
import styled from "styled-components"
import SkillCard from "./skill-card"

const SkillCards = styled.section``

export default ({ skills }) => (
  <SkillCards>
    {skills.map(skillSet => (
      <SkillCard skills={skillSet.skills} headerText={skillSet.header} />
    ))}
  </SkillCards>
)
