import { FC } from 'react';
import CareerMolecules from '../../molecules/Career/container';
import CareerType from '../../../domain/career';
import CategoryHeader from '../../atoms/categoryHeader';

type Props = {
  careers: CareerType[];
};

const Presenter: FC<Props> = (props) => {
  const { careers } = props;

  return (
    <div className="pt-8">
      <CategoryHeader content="Career" />
      {careers.map((career) => (
        <CareerMolecules
          key={`${career.name}+${career.startedAt.toISOString()}`}
          career={career}
        />
      ))}
    </div>
  );
};

export default Presenter;
