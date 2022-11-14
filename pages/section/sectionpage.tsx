import { DropDown } from '@nextui-org/react';
import React from 'react';
import { UserLayout } from '../../components/layout/UserLayout';

const SectionPage = () => {
  return (
    <UserLayout title="SectionPage">
      <h1>SectionPage</h1>

      <Dropdown>
        <Dropdown.Button flat>Trigger</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
          <Dropdown.Item key="new">New file</Dropdown.Item>
          <Dropdown.Item key="copy">Copy link</Dropdown.Item>
          <Dropdown.Item key="edit">Edit file</Dropdown.Item>
          <Dropdown.Item key="delete" color="error">
            Delete file
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </UserLayout>
  );
};

export default SectionPage;
