import { FC } from 'react';

type Props = {
  title: string;
  description: string;
  url: string;
  keywords: string[];
};

const Presenter: FC<Props> = (props) => {
  const { title, description, url, keywords } = props;

  return (
    <div className="p-8 m-4 text-center md:w-1/3 border-l-2 border-r-2 border-secondary rounded-3xl">
      <h2 className="text-3xl">{title}</h2>
      <p>#{keywords.join(' #')}</p>
      <div>
        <p className="py-4">{description}</p>
        <a href={url}>github</a>
      </div>
    </div>
  );
};

export default Presenter;
