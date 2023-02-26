import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  border-radius: 5px;
  margin-bottom: 100px;
  background-color: #fff;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarImg = styled.img`
  height: 200px;
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const AvatarName = styled.p`
  font-weight: 700;
  padding-bottom: 10px;
`;

export const AvatarTag = styled.p`
  font-weight: 400;
  font-size: 32px;
  padding-bottom: 10px;
  color: #646161;
`;

export const AvatarLocation = styled.p`
  font-weight: 400;
  font-size: 32px;
  padding-bottom: 25px;
  color: #646161;
`;

export const ProfileStats = styled.ul`
  display: flex;

  background-color: #f4f4f4;
  border-radius: 0 0 5px 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 150px;
  padding: 10px;

  box-shadow: 0 0 2px 0 rgb(0 0 0 / 20%);

  &:nth-of-type(1) {
    border-radius: 0 0 0 5px;
  }
  &:nth-of-type(3) {
    border-radius: 0 0 5px 0;
  }
`;

export const StatsLabel = styled.span`
  font-weight: 300;
  font-size: 32px;
  color: #646161;
`;

export const StatsQuantity = styled.span`
  font-size: 34px;
`;
