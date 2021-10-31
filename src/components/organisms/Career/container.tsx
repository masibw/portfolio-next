import { FC } from 'react';
import Presenter from './presenter';
import Career from '../../../domain/career';

type Props = {
  careers: Career[];
};

const CareersOrganisms: FC<Props> = ({ careers }) => (
  <Presenter careers={careers} />
);

export default CareersOrganisms;
