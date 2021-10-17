import Award from '../../domain/award';

const getAwards = (): Award[] => {
  const awards = [
    {
      name: 'ISUCON 11',
      rank: '学生１位',
      description:
        'パフォーマンスチューニングを行う大会です．３人チームで出場しました．クエリにindexを貼ったりアプリロジック改善などを行いました．',
      date: new Date('2021-09-18'),
    },
    {
      name: 'Recuirt Speed Hackathon',
      rank: '１位',
      description:
        'フロントエンドのパフォーマンスチューニングを行うハッカソンです．当日発表されたチームで出場しました．',
      date: new Date('2020-03-03'),
    },
  ];

  return awards;
};

export default getAwards;
