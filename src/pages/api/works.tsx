import Work from '../../domain/work';

// TODO: hasuraから取得する
const getWorks = (): Work[] => {
  const careers: Work[] = [
    {
      title: 'goone',
      description: 'N+1を検出するCLiツール',
      url: 'github.com/masibw/goone',
      keywords: ['go', 'cli', 'linter'],
    },
    {
      title: 'ブログ',
      description: 'ブログ',
      url: 'github.com/masibw/blog-server',
      keywords: ['go', 'web', 'docker'],
    },
  ];

  return careers;
};

export default getWorks;
