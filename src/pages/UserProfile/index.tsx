import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Modal from '../../components/Modal';
import Dropzone from '../../components/Dropzone';
import api from '../../services/api';

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
  Subject,
  Line
} from './styles';


const UserProfile: React.FC = () => {
  const history = useHistory();
  const [success, setSuccess] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();

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

  const handleUpdateClass = (e: FormEvent) => {
    e.preventDefault();
    
    try {
      if(!whatsapp || !bio || !subject || !cost || !scheduleItems) {
        alert('Preencha todos os dados');
      }
      else {
        api.post('/classes', {
          avatar: selectedFile,
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedule: scheduleItems
        }).then(() => {
          alert('Cadastro realizado com sucesso!');
    
          setSuccess(true);
          history.push('/');
        }).catch(() => {
          setSuccess(false);
          alert('Erro no cadastro');
        }) 
      }
    } catch(err) {
      setSuccess(false);
      alert('Erro ao cadastrar iformações');
    }
  }

  return (
    <Container id="page-teacher-form">
      <PageHeader
        pageName="Meu perfil"
        background={backgroundImg}
      >
        <UserInfos>
          <Avatar >
            <div className="dropzone">
              <Dropzone onFileUploaded={setSelectedFile}/>
            </div>
            <div className="icon">
              <img src={cameraIcon} alt="camera icon"/>
            </div>
          </Avatar>
          <Name>Raphael Costa</Name>
          <Subject>Inglês</Subject>
        </UserInfos>
      </PageHeader>

      <Main>
        <form onSubmit={handleUpdateClass}>
          <Fieldset>
            <legend>Seus dados</legend>
            <div className="name-inputs">
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
            </div>
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
                  <Line />
                    <button type="button" onClick={() => {}}>
                      Excluir horário
                    </button>
                  <Line />
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
          title="Cadastro editado com sucesso!" 
          description="Tudo certo, seu cadastro foi editado. Continue de olho no seu WhatsApp!" 
          isAuthenticaded={true} 
          buttonText="Acessar lista"
          navigateTo="/home"
        />
      )}
    </Container>
  );
}

export default UserProfile;