import Career from '../../domain/career';

// TODO: hasuraから取得する
const getCareers = (): Career[] => {
  const careers: Career[] = [
    {
      name: '株式会社サイバーエージェント',
      startedAt: new Date('2021-04-06'),
      endedAt: new Date('2021-04-28'),
      content:
        'Goを使ったプロジェクトの開発に参加しました．初期アーキテクチャ・技術の選定からCI・CD環境の構築，一部の実装まで行いました．',
    },
    {
      name: '株式会社ディー・エヌー・エー',
      startedAt: new Date('2021-05-11'),
      endedAt: new Date('2021-05-27'),
      content:
        'インターンとして開発に参加しました．Goを用いたプロジェクトの機能開発における事前調査・変更方法の提案やAWSを用いたslackbot開発に取り組みました．',
    },
    {
      name: '株式会社VOYAGE GROUP(Sunrise)',
      startedAt: new Date('2020-10-05'),
      endedAt: new Date('2020-11-13'),
      content:
        '大量のアクセスに耐えうるwebサービスを構築するための講義型（？）インターンに参加しました．',
    },
    {
      name: '株式会社リクルート',
      startedAt: new Date('2020-10-05'),
      endedAt: new Date('2020-11-13'),
      content:
        'サーバーサイドエンジニアとしてScalaで書かれたサービスの機能開発に取り組みました．APIやDBテーブルの設計から実装まで行いました．',
    },
    {
      name: '合同会社DMM.com(DMM GUILD)',
      startedAt: new Date('2020-09-07'),
      endedAt: new Date('2020-09-18'),
      content:
        '様々な事業部から発行されたIssueの中から好きなものに取り組むインターンでした。GoのプロダクトでORMを使用するように書き換えたりページングをJavaScriptで実装・ログ監視による異常をslackへ通知する設定などを行いました。',
    },
    {
      name: '株式会社メルカリ',
      startedAt: new Date('2020-08-31'),
      endedAt: new Date('2020-09-04'),
      content:
        '2日間Goでの静的解析の講義を受け、3日間で静的解析ツールを作成しました。私はN+1問題になっている箇所を発見するgooneというツールを開発しました。',
    },
    {
      name: '株式会社アカツキ',
      startedAt: new Date('2020-08-02'),
      endedAt: new Date('2020-08-21'),
      content:
        'スマホゲームのサーバーサイドエンジニアとして運用管理画面の改善や新規キャラクターの追加・パフォーマンス改善への調査・脆弱性検知システムの自動化・AWSインスタンスのリソース異常の対応を行いました。',
    },
    {
      name: '株式会社サイバーエージェント',
      startedAt: new Date('2020-06-06'),
      endedAt: new Date('2020-06-07'),
      content:
        'いわゆるISUCONのようにパフォーマンスチューニングのコンテストインターンに参加しました。N+1問題の解決やRedisを使ったキャッシュ・NginxやMySQLのチューニングなどを行いました。',
    },
    {
      name: 'チームラボ株式会社',
      startedAt: new Date('2020-02-03'),
      endedAt: new Date('2020-02-14'),
      content:
        'React.js + play frameworkを使用したプロジェクトでの不具合原因の調査・修正とAWS EC2(Amazon Linux2)での動作バージョン確認や環境構築手順のドキュメント作成などを行いました。',
    },
  ];

  return careers;
};

export default getCareers;
