import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import smileIcon from '../../assets/images/icons/smile.svg';

import api from '../../services/api';

import {
  Container,
  Form,
  List
} from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [thereAreTeachers, setThereAreTeachers] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });
    if(!response || response.data === []) {
      setThereAreTeachers(false);
    } else {
      setTeachers(response.data);
      setThereAreTeachers(true);
    }
  }

  const title = "Estes são os proffys disponíveis.";
  return (
    <Container>
      <PageHeader 
        pageTitle={title} 
        icon={smileIcon} 
        iconAlt="smile icon"
        iconText={`Nós temos 32 proffys.`}
        pageName="Estudar"
      >
        <Form onSubmit={searchTeachers}>
        <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Educação Física', label: 'Educação Física'},
              { value: 'Física', label: 'Física'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'História', label: 'História'},
              { value: 'Inglês', label: 'Inglês'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Português', label: 'Português'},
              { value: 'Química', label: 'Química'},
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={(e) => { setWeek_day(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda-feita'},
              { value: '2', label: 'Terça-feira'},
              { value: '3', label: 'Quarta-feira'},
              { value: '4', label: 'Quinta-feira'},
              { value: '5', label: 'Sexta-feira'},
              { value: '6', label: 'Sábado'},
            ]}
          />
          <Input 
            type="time" 
            name="time" 
            label="Hora" 
            value={time}
            onChange={(e) => { setTime(e.target.value) }}
          />

          <button type="submit">
            Buscar
          </button>
        </Form>
      </PageHeader>
      
      <List>
        {!thereAreTeachers && (
          <h1>Nenhum proffy encontrado com sua pesquisa.</h1>
        )}
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} /> 
        })}
      </List>
    </Container>
  );
}

export default TeacherList;