import { FC } from 'react';
import getAwards from '../../../pages/api/award';
import Presenter from './presenter';

const AwardsOrganisms: FC = () => {
  const awards = getAwards();

  return <Presenter awards={awards} />;
};

export default AwardsOrganisms;
