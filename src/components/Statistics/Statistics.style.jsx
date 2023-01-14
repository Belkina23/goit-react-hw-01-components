import styled from '@emotion/styled';

export const StatSection = styled.section`
  background-color: white;
  width: 400px;
  margin: auto;
 
`;

export const TitleSiction = styled.h2`
margin: 0;
padding: 30px;
  color: black;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 7px;
  text-align: center;
  padding: 10px;
  width: calc(100% / 5);
  ${statsBackgroundColor}
`;

export const StatLabel = styled.span`
color: #e2e0e0;`;

export const StatPercentage = styled.span`
color: #e2e0e0;
font-size: 20px;
font-weight: 600;
`;

function statsBackgroundColor({ id }) {
  const color = getRandomHexColor();

  return `
                background-color: ${color}; 
                color: ${color};
        `;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
