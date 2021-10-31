import { FC } from 'react';
import AboutOrganisms from '../components/organisms/About/container';
import CareersOrganisms from '../components/organisms/Career/container';
import AwardsOrganisms from '../components/organisms/Awards/container';
import WorksOrganisms from '../components/organisms/Works/container';
import getCareers from './api/career';
import getAwards from './api/award';
import getWorks from './api/works';
import Career from '../domain/career';
import Award from '../domain/award';
import Work from '../domain/work';

export function getStaticProps() {
  const careers = getCareers();
  const awards = getAwards();
  const works = getWorks();

  return {
    props: {
      careers,
      awards,
      works,
    },
  };
}
const Home: FC<{ careers: Career[]; awards: Award[]; works: Work[] }> = ({
  careers,
  awards,
  works,
}) => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <main className="container lg:max-w-6xl">
      <AboutOrganisms />
      <CareersOrganisms careers={careers} />
      <AwardsOrganisms awards={awards} />
      <WorksOrganisms works={works} />
    </main>
  </div>
);

export default Home;
