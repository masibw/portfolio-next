import { FC } from 'react';

type Props = {
  name: string;
  startedAt: string;
  endedAt: string;
  content: string;
  isIntern: boolean;
};

const Presenter: FC<Props> = (props) => {
  const { name, startedAt, endedAt, content, isIntern } = props;

  return (
    <div className="py-6 m-4 md:flex gap-x-8 border-b-2 border-secondary">
      <div className="md:w-5/12">
        <h2 className="text-3xl font-bold">{name}</h2>
        <div className="flex">
          <p className="text-gray-600">
            {startedAt} &#65374; {endedAt}
          </p>
          <p className="px-8">{isIntern ? 'インターン' : ''}</p>
        </div>
      </div>
      <div className="flex items-center flex-1">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Presenter;
