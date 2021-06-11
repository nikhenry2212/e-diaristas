import React from 'react';
import {
  AvatarStyled,
  RaitingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from './UserInformation.style'

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({picture, name, rating,description}) => {
  return (
    <UserInformationContainer>
        <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
        <UserName>{name}</UserName>
        <RaitingStyled readOnly value={rating}/>
        <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  )
}
export default UserInformation;