import Award from '../../domain/award';

const getAwards = (): Award[] => {
  const awards = [
    {
      name: 'ISUCON',
      description: '学生１位',
      date: new Date('2021-09-18'),
    },
    {
      name: 'Recuirt Speed Hackathon',
      description: '1st Place',
      date: new Date('2020-03-03'),
    },
  ];

  return awards;
};

export default getAwards;
