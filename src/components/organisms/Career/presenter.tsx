import { FC } from 'react';
import CareerMolecules from '../../molecules/Career/container';
import CareerType from '../../../domain/career';

type Props = {
  careers: CareerType[];
};

const Presenter: FC<Props> = (props) => {
  const { careers } = props;

  return (
    <div>
      <h1 className="text-4xl text-primary">Career</h1>
      {careers.map((career) => (
        <CareerMolecules key={career.name} career={career} />
      ))}
    </div>
  );
};

export default Presenter;
