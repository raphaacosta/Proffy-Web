import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Modal from '../../components/Modal';

import warningIcon from '../../assets/images/icons/warning.svg';
import backgroundImg from '../../assets/images/background.svg';
import cameraIcon from '../../assets/images/icons/camera.svg';

import { 
  Container,
  Main,
  Fieldset,
  Footer,
  Button,
  Avatar,
  UserInfos,
  Name,
  Subject
} from './styles';

const UserProfile: React.FC = () => {
  // const history = useHistory();
  const [success, setSuccess] = useState(false);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
    // const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
    //   if (index === position) {
    //     return { ...scheduleItem, [field]: value };
    //   }

    //   return scheduleItem;
    // });
  }

  return (
    <Container id="page-teacher-form">
      <PageHeader
        pageName="Meu perfil"
        background={backgroundImg}

      >
        <UserInfos>
          <Avatar >
            <img src="https://github.com/raphaacosta.png" alt="user avatar"/>
            <img src={cameraIcon} alt="camera icon" className="icon"/>
          </Avatar>
          <Name>Raphael Costa</Name>
          <Subject>Inglês</Subject>
        </UserInfos>
      </PageHeader>

      <Main>
        <form onSubmit={() => {}}>
          <Fieldset>
            <legend>Seus dados</legend>
            <Input 
              name="name" 
              label="Nome"
              required
              value={firstName} 
              onChange={(e) => {setFirstName(e.target.value) }}
            />
            <Input 
              name="sobrenome" 
              label="Sobrenome"
              required
              value={lastName} 
              onChange={(e) => {setLastName(e.target.value) }}
            />
            <Input 
              name="email" 
              label="E-mail"
              required
              value={whatsapp} 
              onChange={(e) => {setWhatsapp(e.target.value) }}
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp"
              required
              value={whatsapp} 
              onChange={(e) => {setWhatsapp(e.target.value) }}
            />
            <Textarea 
              name="bio" 
              label="Biografia (máximo 300 caracteres)"
              required
              value={bio} 
              onChange={(e) => {setBio(e.target.value) }}
            />

          </Fieldset>

          <Fieldset>
            <legend>Sobre a aula</legend>
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
            <Button type="submit" onClick={() => {setSuccess(true)}}>
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
          navigateTo="/"
        />
      )}
    </Container>
  );
}

export default UserProfile;