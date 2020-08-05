import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import {
  Container,
  Header,
  Footer,
  Button
} from './styles';

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
              <strong>R$ {teacher.cost},00</strong>
            </p>
            <Button target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </Button>
          </Footer>
        </Container>
  );
}

export default TeacherItem;