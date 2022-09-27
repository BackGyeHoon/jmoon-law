import styled from "styled-components"

const Wrapper = styled.section `
  width: 100%;
  height: 100vh;
  background-color: #345e63;
`

const HeaderWrapper = styled.header `
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
`

const HeaderMenus = styled.ul `
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`

const HeaderItem = styled.li `
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-align: center;
`

export default function Home() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderMenus>
          <HeaderItem>소개</HeaderItem>
          <HeaderItem>소개</HeaderItem>
          <HeaderItem>소개</HeaderItem>
          <HeaderItem>소개</HeaderItem>
        </HeaderMenus>
      </HeaderWrapper>
    </Wrapper>
  )
}
