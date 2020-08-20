import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Modal from '../../components/Modal';

import warningIcon from '../../assets/images/icons/warning.svg';
import rocketIcon from '../../assets/images/icons/rocket.svg';

import api from '../../services/api';

import {
  Container,
  Main,
  Avatar,
  Fieldset,
  Footer,
  Button
} from './styles';


const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [success, setSucces] = useState(false);
  
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: ''},
  ]);
  
  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      }
    ]);

    scheduleItems.push()
  }

  const setScheduleItemValue = (position: number, field: string, value: string) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });
    
    setScheduleItems(updatedScheduleItems);
  }
  
  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();
    
    try {
      if(!whatsapp || !bio || !subject || !cost || !scheduleItems) {
        alert('Preencha todos os dados');
      }
      else {
        api.post('/classes', {
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedule: scheduleItems
        }).then(() => {
          alert('Cadastro realizado com sucesso!');
    
          setSucces(true);
          history.push('/');
        }).catch(() => {
          setSucces(false);
          alert('Erro no cadastro');
        }) 
      }
    } catch(err) {
      setSucces(false);
      alert('Erro ao cadastrar iformações');
    }
  }

  return (
    <Container id="page-teacher-form">
      <PageHeader 
        pageTitle="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
        icon={rocketIcon}
        iconAlt="rocket icon"
        iconText="Prepare-se! Vai ser o máximo."
        pageName="Dar aulas"
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <Fieldset>
            <legend>Seus dados</legend>
            <div className="data-groud">
              <Avatar src="https://github.com/raphaacosta.png" alt="user avatar"/>
              <span>Raphael Costa</span>
              <Input 
                name="whatsapp" 
                label="Whatsapp"
                required
                value={whatsapp} 
                onChange={(e) => {setWhatsapp(e.target.value) }}
              />
            </div>
            <Textarea 
              name="bio" 
              label="Biografia (máximo 300 caracteres)"
              maxLength={300}
              required
              value={bio} 
              onChange={(e) => {setBio(e.target.value) }}
            />

          </Fieldset>

          <Fieldset>
            <legend>Sobre a aula</legend>
            <div className="data-groud">
              <Select 
                name="subject" 
                label="Matéria"
                required
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
              <Input 
                name="cost" 
                label="Custo da sua hora por aula"
                required 
                value={cost}
                onChange={(e) => { setCost(e.target.value) }}
              />
            </div>
          </Fieldset>

          <Fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da semana"
                    required
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                    name="from" 
                    label="Das" 
                    required
                    type="time" 
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    name="to" 
                    label="Até" 
                    required
                    type="time" 
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
          </Fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br/>
              preencha todos os dados
            </p>
            <Button type="submit">
              Salvar cadastro
            </Button>
          </Footer>
        </form>
      </Main>
      {success && (
        <Modal 
          title="Cadastro salvo!" 
          description="Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp." 
          isAuthenticaded={true} 
          buttonText="Acessar lista"
          navigateTo="/home"
        />
      )}
    </Container>
  );
}

export default TeacherForm;