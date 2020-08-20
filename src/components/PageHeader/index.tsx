import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import SwitchComponent from '../Switch';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import logoDark from '../../assets/images/logo-dark.svg';
import backgroundImg from '../../assets/images/profile-background.svg';

import {
  Header,
  HeaderContent,
  Icon,
  Text,
  TopBar,
  TopBarContainer
} from './styles';

interface PageHeaderProps {
  pageTitle?: string;
  description?: string;
  background?: boolean;
  pageName?: string;
  icon?: string;
  iconAlt?: string;
  iconText?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  pageTitle, 
  description,
  icon,
  iconAlt,
  iconText,
  pageName,
  background,
  children
}) => {
  const { title } = useContext(ThemeContext);

  return (
    <Header className="page-header">
      <TopBarContainer>
        <TopBar>
          <Link to="/home" >
            <img src={backIcon} alt="Voltar para home"/>
          </Link>
          <p>{pageName}</p>
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
        {background && <img src={backgroundImg} alt="background"/>}
        <Text>
          <strong>{pageTitle}</strong>
          { description && <p>{description}</p>}
        </Text>
        
        {children}

        <Icon>
          <img src={icon} alt={iconAlt}/>
          <p>{iconText}</p>
        </Icon>
      </HeaderContent>
    </Header>
  );
}

export default PageHeader;