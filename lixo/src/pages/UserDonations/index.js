import React from 'react';

import DonationList from '../../components/Donations';

import {Container} from './styles';

export default function UserDonations() {
  return (
    <Container>
      <DonationList />
    </Container>
  );
}
