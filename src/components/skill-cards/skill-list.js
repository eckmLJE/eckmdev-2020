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
  margin: 0;
  padding: 0 8px 0 0;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 30px;
    width: auto;
  }
`

const SkillText = styled.h4`
  margin: 0;
  padding: 0;
`

const mapSkills = skills =>
  skills.map(skill => (
    <SkillItem key={skill.name}>
      <SkillIcon>
        <img src={skill.logo} alt={skill.name} />
      </SkillIcon>
      <SkillText>{skill.name}</SkillText>
    </SkillItem>
  ))

export default props => <SkillList>{mapSkills(props.skills)}</SkillList>
