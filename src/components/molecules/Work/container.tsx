import { FC } from 'react';
import Presenter from './presenter';
import Work from '../../../domain/work';

type Props = {
  work: Work;
};

const WorksMolecules: FC<Props> = (props) => {
  const { work } = props;

  return (
    <Presenter
      title={work.title}
      description={work.description}
      url={work.url}
      keywords={work.keywords}
    />
  );
};

export default WorksMolecules;
