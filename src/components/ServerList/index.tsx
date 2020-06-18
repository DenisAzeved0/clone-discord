import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton hasNotifications mentions={3} />
      <ServerButton />
      <ServerButton hasNotifications mentions={54} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={1} />
      <ServerButton />
      <ServerButton hasNotifications />
    </Container>
  );
};

export default ServerList;