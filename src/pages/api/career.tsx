import Career from '../../domain/career';

// TODO: hasuraから取得する
const getCareers = (): Career[] => {
  const careers: Career[] = [
    {
      name: 'Recruit',
      startedAt: new Date('2020-11-01'),
      endedAt: new Date('2020-11-31'),
      content: 'Scalaを使った開発',
    },
    {
      name: 'Cyber Agent',
      startedAt: new Date('2021-05-01'),
      endedAt: new Date('2021-05-31'),
      content: 'Goを使った開発',
    },
  ];

  return careers;
};

export default getCareers;
