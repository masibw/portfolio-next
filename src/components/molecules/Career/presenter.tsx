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
    <div className="py-6 flex gap-x-8 border-b-2 border-secondary">
      <div className="md:w-5/12">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-gray-600">
          {startedAt} &#65374; {endedAt}
        </p>
      </div>
      <div className="flex items-center flex-1">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Presenter;
