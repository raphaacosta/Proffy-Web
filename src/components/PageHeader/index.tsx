import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import {
  Header,
  HeaderContent,
  TopBarContainer
} from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Header className="page-header">
        <TopBarContainer>
          <Link to="/" >
            <img src={backIcon} alt="Voltar para home"/>
          </Link>
          <img src={logoImg} alt="Proffy"/>
        </TopBarContainer>

        <HeaderContent className="header-content">
          <strong>{props.title}</strong>
          { props.description && <p>{props.description}</p>}
          
          {props.children}
        </HeaderContent>
      </Header>
  );
}

export default PageHeader;