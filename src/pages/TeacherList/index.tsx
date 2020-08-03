import React from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';

// import './styles.css';
import {
  Container,
  Form,
  List
} from './styles';

const TeacherList: React.FC = () => {
  const title = "Estes são os proffys disponíveis.";
  return (
    <Container>
      <PageHeader title={title}>
        <Form>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </Form>
      </PageHeader>

      <List>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </List>
    </Container>
  );
}

export default TeacherList;