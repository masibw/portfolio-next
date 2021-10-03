import { FC } from 'react';

type Props = {
  name: string;
  startedAt: string;
  endedAt: string;
  content: string;
};

const Presenter: FC<Props> = (props) => {
  const { name, startedAt, endedAt, content } = props;

  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{startedAt}</li>
        <li>{endedAt}</li>
        <li>{content}</li>
      </ul>
    </div>
  );
};

export default Presenter;
