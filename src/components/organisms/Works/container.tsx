import { FC } from 'react';
import Presenter from './presenter';
import getWorks from '../../../pages/api/works';

const WorksOrganisms: FC = () => {
  const works = getWorks();

  return <Presenter works={works} />;
};
export default WorksOrganisms;
