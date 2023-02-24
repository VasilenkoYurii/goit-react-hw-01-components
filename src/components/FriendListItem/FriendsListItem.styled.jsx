import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  width: 300px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
`;

export const ItemStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;

  background-color: ${props => {
    return props.online ? 'green' : 'red';
  }};
`;

export const ItemAvatsr = styled.img`
  margin-left: 10px;
`;

export const ItemName = styled.p`
  margin-left: 10px;
`;
