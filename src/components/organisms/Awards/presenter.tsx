import { FC } from 'react';
import Award from '../../../domain/award';
import AwardMolecules from '../../molecules/Award/container';
import CategoryHeader from '../../atoms/categoryHeader';

type Props = {
  awards: Award[];
};

const Presenter: FC<Props> = (props) => {
  const { awards } = props;

  return (
    <div>
      <CategoryHeader content="Awards" />
      <div className="md:flex">
        {awards.map((award) => (
          <AwardMolecules key={award.name} award={award} />
        ))}
      </div>
    </div>
  );
};

export default Presenter;
