import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

const TeacherForm: React.FC = () => {
  const title = "Que incrível que você quer dar aulas.";
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title={title}
        description="O primeiro passo é preencher o formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="Whatsapp"/>
          <Textarea name="bio" label="Biografia"/>
        </fieldset>

        <fieldset>
          <legend>Seus dados</legend>
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
          <Input name="cost" label="Custo da sua hora por aula"/>
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">
              + Novo horário
            </button>
          </legend>

          <div className="schedule-item">
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
            <Input name="from" label="Das" type="time"/>
            <Input name="to" label="Até" type="time"/>
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;