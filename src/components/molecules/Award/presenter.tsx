import { FC } from 'react';

type Props = {
  name: string;
  rank: string;
  description: string;
  date: string;
};

const Presenter: FC<Props> = (props) => {
  const { name, rank, description, date } = props;

  return (
    <div className="p-8 m-4 text-center md:w-1/3 border-t-2 border-b-2 border-secondary rounded-3xl">
      <h2 className="text-3xl">{name}</h2>
      <h3 className="font-bold">{rank}</h3>
      <div>
        <p className="py-4">{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Presenter;
