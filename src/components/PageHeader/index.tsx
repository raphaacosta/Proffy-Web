import React, { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { useTheme } from '../../hooks/theme';

import { Link } from 'react-router-dom';

import { FaMoon, FaSun } from 'react-icons/fa';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import logoDark from '../../assets/images/logo-dark.svg';

import {
  Header,
  HeaderContent,
  SwitchContainer,
  Alinhador,
  TopBarContainer
} from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title } = useContext(ThemeContext);

  const { toggleTheme } = useTheme();

  return (
    <Header className="page-header">
        <TopBarContainer>
          <Link to="/" >
            <img src={backIcon} alt="Voltar para home"/>
          </Link>
          {title === 'light' ? (
            <img src={logoImg} alt="Proffy"/>
          ) : (
            <img src={logoDark} alt="Proffy"/>
          )}
        </TopBarContainer>
        
        <SwitchContainer>
          <Alinhador></Alinhador>
          <Switch 
              className="switch"
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={<span>
                <FaMoon color="#202040" style={{marginTop: 5, marginLeft: 8,}}/>
              </span>}
              uncheckedIcon={<span>
                <FaSun color="#6633CC" style={{marginTop: 5, marginLeft: 5,}}/>
              </span>}
              offColor="#202040"
              onColor="#602080"
              offHandleColor="#602080"
              onHandleColor="#202040"
          />
        </SwitchContainer>

        <HeaderContent className="header-content">
          <strong>{props.title}</strong>
          { props.description && <p>{props.description}</p>}
          
          {props.children}
        </HeaderContent>
      </Header>
  );
}

export default PageHeader;