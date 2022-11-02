import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import { NavigationWrapper } from '../css/Navigation.styled';

// IMAGES
import home from '../images/home.svg';
import chat from '../images/chat.svg';
import write from '../images/write.svg';
import mypage from '../images/fprofile.svg';

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <ul className={'tab-bar'}>
        <li>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/feed'}>
            <img src={home} />
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/chat'}>
            <img src={chat} />
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/write'}>
            <img src={write} />
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/mypage'}>
            <img src={mypage} />
          </Link>
        </li>
      </ul>
    </NavigationWrapper>
  );
};
