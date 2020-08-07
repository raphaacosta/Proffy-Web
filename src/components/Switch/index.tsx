import React, { useContext } from 'react';

import { Alinhador, SwitchContainer } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useTheme } from '../../hooks/theme';
import { FaMoon, FaSun } from 'react-icons/fa';

const SwitchComponent: React.FC = () => {
  const { title } = useContext(ThemeContext);

  const { toggleTheme } = useTheme();

  return (
    <SwitchContainer>
      <Alinhador></Alinhador>
      <Switch 
          className="switch"
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={<span>
            <FaMoon color="#202040" style={{marginTop: 5, marginLeft: 8,}}/>
          </span>}
          uncheckedIcon={<span>
            <FaSun color="#6633CC" style={{marginTop: 5, marginLeft: 5,}}/>
          </span>}
          offColor="#202040"
          onColor="#602080"
          offHandleColor="#602080"
          onHandleColor="#202040"
      />
    </SwitchContainer>
  );
}

export default SwitchComponent;