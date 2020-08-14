import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import CreateUsers from './pages/CreateUsers';
import ForgotPassword from './pages/ForgotPassword';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact/>
      <Route path="/login" component={Login} />
      <Route path="/users" component={CreateUsers} />
      <Route path="/forgot_password" component={ForgotPassword} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;