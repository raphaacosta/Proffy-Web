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
  Icon,
  Text,
  TopBar,
  TopBarContainer
} from './styles';

interface PageHeaderProps {
  title?: string;
  description?: string;
  background?: string;
  pageName?: string;
  icon?: string;
  iconAlt?: string;
  iconText?: string;
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
            <p>{props.pageName}</p>
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
          <Text>
            <strong>{props.title}</strong>
            { props.description && <p>{props.description}</p>}
          </Text>
          
          {props.children}

          <Icon>
            <img src={props.icon} alt={props.iconAlt}/>
            <p>{props.iconText}</p>
          </Icon>
        </HeaderContent>
      </Header>
  );
}

export default PageHeader;