import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  background-color: white;
  display: block;
  border-radius: 2%;
  width: 300px;
  margin: 50px auto;
  box-shadow: 1px 1px 3px #4b4949;
  :hover,
  :focus {
    box-shadow: 2px 2px 8px #363636;
  }
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
text-align: center;
`;

export const UserName = styled.p`
  color: black;
  font-size: 25px;
  font-weight: 700;
`;

export const InfoUser = styled.p`
  color: rgb(114, 107, 107);
  font-weight: 500;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #d1cfcf;

`;

export const ItemStatsList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  width: calc(100% / 3);
  padding: 20px;
`;

export const LabelStats = styled.span`
color: rgb(114, 107, 107);
font-weight: 500;
font-size: 15px;
`;

export const QuantityStats = styled.span`
color: black;
font-weight: 700;
font-size: 18px;
`;
