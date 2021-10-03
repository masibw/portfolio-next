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
    <div>
      <ul>
        <li>{title}</li>
        <li>{description}</li>
        <li>{url}</li>
        <li>{keywords.join(' #')}</li>
      </ul>
    </div>
  );
};

export default Presenter;
