import { FC } from 'react';
import WorksMolecules from '../../molecules/Work/container';
import Work from '../../../domain/work';

type Props = {
  works: Work[];
};

const Presenter: FC<Props> = (props) => {
  const { works } = props;

  return (
    <div>
      <h1 className="text-4xl text-primary">Works</h1>
      {works.map((work) => (
        <WorksMolecules work={work} />
      ))}
    </div>
  );
};
export default Presenter;
