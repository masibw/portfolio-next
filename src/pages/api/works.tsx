import Work from '../../domain/work';

// TODO: hasuraから取得する
const getWorks = (): Work[] => {
  const careers: Work[] = [
    {
      title: 'goone',
      description:
        'Go言語のプロジェクトでN+1となっているSQLクエリを検出するCLIツールです．',
      url: 'https://github.com/masibw/goone',
      keywords: ['go', 'cli', 'linter'],
    },
    {
      title: 'ブログ(サーバーサイド)',
      description: 'Goで作られた自作ブログです',
      url: 'https://github.com/masibw/blog-server',
      keywords: ['go', 'web', 'docker'],
    },
    {
      title: 'ブログ(フロントエンド)',
      description: 'Next.jsで作られた自作ブログです',
      url: 'https://github.com/masibw/blog-front',
      keywords: ['next.js', 'web', 'docker'],
    },
    {
      title: 'checkspaces',
      description:
        'Go言語のプロジェクトで//とディレクティブの間にスペースがあるかをチェックするCLIツールです．',
      url: 'https://github.com/masibw/blog-server',
      keywords: ['go', 'cli', 'linter'],
    },
    {
      title: 'godg',
      description: 'dockerコンテナの起動を図に表すCLIツールです．',
      url: 'https://github.com/masibw/godg',
      keywords: ['go', 'cli', 'docker'],
    },
  ];

  return careers;
};

export default getWorks;
