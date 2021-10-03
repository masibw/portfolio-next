import { FC } from 'react';
import Award from '../../../domain/award';
import AwardMolecules from '../../molecules/Award/container';

type Props = {
  awards: Award[];
};

const Presenter: FC<Props> = (props) => {
  const { awards } = props;

  return (
    <div>
      <h1 className="text-4xl text-primary">Awards</h1>
      {awards.map((award) => (
        <AwardMolecules award={award} />
      ))}
    </div>
  );
};

export default Presenter;
