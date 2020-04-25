import React, {useContext} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade, lighten }  from 'polished';

import { Container } from  './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Hello World

      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={12}
        width={40}
        handleDiameter={24}
        offColor={shade(0.2, colors.primary)}
        onColor={lighten(0.15, colors.primary)}
      />
    </Container>
  );
}

export default Header;