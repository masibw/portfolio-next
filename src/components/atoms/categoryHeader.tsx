import { FC } from 'react';

type Props = {
  content: string;
};

const CategoryHeader: FC<Props> = (props) => {
  const { content } = props;

  return (
    <h1 className="text-4xl text-primary font-bold text-center py-8">
      {content}
    </h1>
  );
};

export default CategoryHeader;
