import { FC } from 'react';
import Presenter from './presenter';
import Work from '../../../domain/work';

type Props = {
  works: Work[];
};

const WorksOrganisms: FC<Props> = ({ works }) => <Presenter works={works} />;
export default WorksOrganisms;
