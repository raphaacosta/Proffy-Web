import React, { useContext } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import whatsappIconDark from '../../assets/images/icons/whatsapp-dark.svg';

import api from '../../services/api';

import {
  Container,
  Header,
  Footer,
  Button
} from './styles';
import { ThemeContext } from 'styled-components';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string; 
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  const { title } = useContext(ThemeContext);
  const createNewConnection = async () => {
    await api.post('/connections', {
      user_id: teacher.id,
    });
  }
  
  return (
    <Container>
          <Header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </Header>

          <p>
            {teacher.bio}
          </p>
          <Footer>
            <p>
              Preço/hora
              <strong>R$ {teacher.cost}</strong>
            </p>
            <Button target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
              {title === 'light' ? 
              <img src={whatsappIcon} alt="Whatsapp"/> :
              <img src={whatsappIconDark} alt="Whatsapp"/>
              }
              Entrar em contato
            </Button>
          </Footer>
        </Container>
  );
}

export default TeacherItem;