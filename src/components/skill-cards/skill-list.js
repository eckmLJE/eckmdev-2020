import React from "react"
import styled from "styled-components"

const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  flex-flow: column wrap;
  width: 40%;
`

const SkillItem = styled.li`
  margin: 0;
  padding: 8px 0;
  display: flex;
  align-items: center;
`

const SkillIcon = styled.div`
  position: relative;
  width: 30px;
  height: 100%;
`

const SkillText = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: normal;
  padding-left: 0.75rem;
`

const Skills = ({ skills }) =>
  skills.map(skill => {
    const SkillLogo = skill.logo
    return (
      <SkillItem key={skill.name}>
        <SkillIcon>
          <SkillLogo />
        </SkillIcon>
        <SkillText>{skill.name}</SkillText>
      </SkillItem>
    )
  })

export default ({ skills }) => (
  <SkillList>
    <Skills skills={skills} />
  </SkillList>
)
