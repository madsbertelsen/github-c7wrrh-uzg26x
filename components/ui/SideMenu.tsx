import { Card, Text, useTheme } from '@nextui-org/react';
import {
  EnvelopeClosedIcon,
  LockOpen1Icon,
  PersonIcon,
} from '@radix-ui/react-icons';

import { MenuList } from './MenuList';

export const SideMenu = () => {
  return (
    <Card
      css={{
        minHeight: 'calc(100vh - 16px)',
        width: '250px',
        mt: 8,
        ml: 8,
        backgroundColor: '#bfd8fc',
      }}
    >
      <Text h3 b css={{ textAlign: 'center' }}>
        Menu
      </Text>
      <MenuList />
    </Card>
  );
};
