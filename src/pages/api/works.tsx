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
      description:
        'https://mesimasi.com のサーバーサイドです．Goで作成されています．',
      url: 'https://github.com/masibw/blog-server',
      keywords: ['go', 'web', 'docker'],
    },
    {
      title: 'ブログ(フロントエンド)',
      description:
        'https://mesimasi.com のフロントエンドです．Next.jsを用いています．',
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
    {
      title: '映えとる',
      description:
        '写真の撮り方を共有するサービスです．Exif情報から「撮影場所・向き・機材・設定」などの情報を解析して表示します．フロントはNext.js,サーバーはGoで書かれています．',
      url: 'https://github.com/jphacks/F_2111',
      keywords: ['go', 'next.js', 'docker', 'web'],
    },
  ];

  return careers;
};

export default getWorks;
