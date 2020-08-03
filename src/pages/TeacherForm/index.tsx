import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

const TeacherForm: React.FC = () => {
  const title = "Que incrível que você quer dar aulas.";
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title={title}/>
    </div>
  );
}

export default TeacherForm;