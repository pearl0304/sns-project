import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import { NavigationWrapper } from '../css/Navigation.styled';

// Images
import backBtn from '../images/backBtn.svg';

export const Header = () => {
  return (
    <NavigationWrapper>
      <ul className={'header-box'}>
        <li>
          <img src={backBtn} />
        </li>
        <li>Title</li>
        <li>Setting</li>
      </ul>
    </NavigationWrapper>
  );
};
