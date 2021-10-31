import { FC } from 'react';
import Presenter from './presenter';
import Award from '../../../domain/award';

type Props = {
  award: Award;
};

const AwardMolecules: FC<Props> = (props) => {
  const { award } = props;
  const date = award.date.toISOString().substring(0, 10);

  return (
    <Presenter
      name={award.name}
      rank={award.rank}
      description={award.description}
      date={date}
    />
  );
};

export default AwardMolecules;
