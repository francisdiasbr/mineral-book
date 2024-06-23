import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const CardContainer = styled.View`
  align-items: center;  
  background-color: #fff;
  border-radius: 24px;
  flex-direction: row;
  gap: 24px;
  min-height: 300px;
  padding: 33px 25px;
  width: 100%;
`

export const LeftContent = styled.View`
  align-items: center;
  gap: 9px;
`

export const RightContent = styled.View`
  flex: 1;
  gap: 8px;
`
export const StyledImage = styled.Image`
  width: 104px; 
  height: 104px;
  border-radius: 52px;
`