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
      <div className="md:flex md:justify-center md:flex-wrap">
        {works.map((work) => (
          <WorksMolecules key={work.title} work={work} />
        ))}
      </div>
    </div>
  );
};
export default Presenter;
