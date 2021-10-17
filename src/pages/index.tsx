import Head from 'next/head';
import { FC } from 'react';
import AboutOrganisms from '../components/organisms/About/container';
import CareersOrganisms from '../components/organisms/Career/container';
import AwardsOrganisms from '../components/organisms/Awards/container';
import WorksOrganisms from '../components/organisms/Works/container';

const Home: FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>masi&apos;s portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="container lg:max-w-6xl">
      <AboutOrganisms />
      <CareersOrganisms />
      <AwardsOrganisms />
      <WorksOrganisms />
    </main>
  </div>
);

export default Home;
