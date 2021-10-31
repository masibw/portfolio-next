import { FC } from 'react';
import Presenter from './presenter';
import Award from '../../../domain/award';

type Props = {
  awards: Award[];
};

const AwardsOrganisms: FC<Props> = ({ awards }) => (
  <Presenter awards={awards} />
);

export default AwardsOrganisms;
