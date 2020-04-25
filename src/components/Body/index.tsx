import React from 'react';

import { Container, Content, Title, Text } from './styles';

const Body: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Light / Dark Theme</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a 
          type specimen book.
        </Text>
      </Content>
    </Container>
  );
}

export default Body;