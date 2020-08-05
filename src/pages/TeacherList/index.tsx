import React from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';

import {
  Container,
  Form,
  List
} from './styles';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TeacherList: React.FC = () => {
  const title = "Estes são os proffys disponíveis.";
  return (
    <Container>
      <PageHeader title={title}>
        <Form>
        <Select 
            name="subject" 
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Química', label: 'Química'},
              { value: 'Educação Física', label: 'Educação Física'},
              { value: 'Física', label: 'Física'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'História', label: 'História'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Português', label: 'Português'},
              { value: 'Inglês', label: 'Inglês'},
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda-feita'},
              { value: '2', label: 'Terça-feira'},
              { value: '3 Física', label: 'Quarta-feira'},
              { value: '4', label: 'Quinta-feira'},
              { value: 'Geo5rafia', label: 'Sexta-feira'},
              { value: '6', label: 'Sábado'},
            ]}
          />
          <Input type="time" name="time" label="Hora"/>
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