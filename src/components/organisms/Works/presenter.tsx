import { FC } from 'react';
import WorksMolecules from '../../molecules/Work/container';
import Work from '../../../domain/work';
import CategoryHeader from '../../atoms/categoryHeader';

type Props = {
  works: Work[];
};

const Presenter: FC<Props> = (props) => {
  const { works } = props;

  return (
    <div>
      <CategoryHeader content="Works" />
      {works.map((work) => (
        <WorksMolecules work={work} />
      ))}
    </div>
  );
};
export default Presenter;
