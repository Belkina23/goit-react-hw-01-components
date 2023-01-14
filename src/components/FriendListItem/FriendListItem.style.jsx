import styled from '@emotion/styled';

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;

    background-color: white;
    padding: 20px;
    box-shadow: 1px 1px 3px #4b4949;
  :hover,
  :focus {
    box-shadow: 2px 2px 8px #363636;
  }
`;

export const FriendsStatus = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 100%;
background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')}
`;

export const FriendsName = styled.p`
color: black;
  font-size: 25px;
  font-weight: 700;
`;