import { FC } from 'react';

type Props = {
  name: string;
  description: string;
  date: string;
};

const Presenter: FC<Props> = (props) => {
  const { name, description, date } = props;

  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{description}</li>
        <li>{date}</li>
      </ul>
    </div>
  );
};

export default Presenter;
