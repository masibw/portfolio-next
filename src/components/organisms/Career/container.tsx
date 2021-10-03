import { FC } from 'react';
import Presenter from './presenter';
import getCareers from '../../../pages/api/career';

const CareersOrganisms: FC = () => {
  const careers = getCareers();

  return <Presenter careers={careers} />;
};

export default CareersOrganisms;
