import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import SwitchComponent from '../Switch';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import logoDark from '../../assets/images/logo-dark.svg';

import {
  Header,
  HeaderContent,
  TopBar,
  TopBarContainer
} from './styles';

interface PageHeaderProps {
  title?: string;
  description?: string;
  pageName?: string;
  background?: File;
  icon?: HTMLImageElement;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title } = useContext(ThemeContext);

  return (
    <Header className="page-header">
        <TopBarContainer>
          <TopBar>
            <Link to="/" >
              <img src={backIcon} alt="Voltar para home"/>
            </Link>
            <div className="logo-switch-container">
              <SwitchComponent />
              {title === 'light' ? (
                <img src={logoImg} alt="Proffy"/>
              ) : (
                <img src={logoDark} alt="Proffy"/>
              )}     
            </div>
          </TopBar>
        </TopBarContainer>

        <HeaderContent className="header-content">
          <strong>{props.title}</strong>
          { props.description && <p>{props.description}</p>}
          
          {props.children}

          {props.icon}
        </HeaderContent>
      </Header>
  );
}

export default PageHeader;