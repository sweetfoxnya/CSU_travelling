import React from 'react';

import avatar from '@static/images/avatar.png';

import * as SC from './Avatar.styles';

interface AvatarProps {
  image: string;
}

export const Avatar = ({image}: AvatarProps) => {
  // TODO добавить аватары с АПИ
  return (
    <SC.Link to='/profile'>
      <SC.Avatar src={avatar} alt='Avatar image' />
    </SC.Link>
  );
};
