import React from "react"
import styled from "styled-components"

import SkillList from "./skill-list"

const SkillCard = styled.li`
  width: 100%;

  background-color: #eef0f7;
  display: inline-block;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }

  &:first-child {
    transform: scale(1.01);
    background-color: #fff;
    box-shadow: 0px 5px 35px -8px #ddd;
  }
`

const SkillHeader = styled.h5`
  position: relative;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  padding: 12px 16px 12px;
  color: #787878;
  border-bottom: 1px solid #787878;
`

const SkillBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`

const SkillHero = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 50%;

  h5 {
    margin: 0;
    padding: 24px 8px;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.75rem;
  }
`

const HeroLogoContainer = styled.div`
  position: relative;
  padding-top: 1rem;
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroLogoInner = styled.div`
  position: relative;
  width: 100%;
`
export default ({ skills, headerText }) => {
  const listSkills = skills.slice(1)
  const heroSkill = skills[0]
  const HeroLogo = heroSkill.logo
  return (
    <SkillCard>
      <SkillHeader>{headerText}</SkillHeader>
      <SkillBody>
        <SkillHero>
          <HeroLogoContainer>
            <HeroLogoInner>
              <HeroLogo />
            </HeroLogoInner>
          </HeroLogoContainer>
          <h5>
            <strong>{heroSkill.name}</strong>
          </h5>
        </SkillHero>
        <SkillList skills={listSkills} />
      </SkillBody>
    </SkillCard>
  )
}
