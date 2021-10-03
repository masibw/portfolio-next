import { FC } from 'react';
import Presenter from './presenter';
import Career from '../../../domain/career';

type Props = {
  career: Career;
};

const CareerMolecules: FC<Props> = (props) => {
  const { career } = props;
  const startedAt = career.startedAt.toISOString().substring(0, 10);
  const endedAt = career.endedAt
    ? career.endedAt.toISOString().substring(0, 10)
    : 'Present';

  return (
    <Presenter
      name={career.name}
      startedAt={startedAt}
      endedAt={endedAt}
      content={career.content}
    />
  );
};

export default CareerMolecules;
