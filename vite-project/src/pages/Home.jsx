import React from 'react';
import Logo from '../components/organisms/Logo';
import ExploreSection from '../components/organisms/ExploreSection';
import Section from '../components/organisms/Section';
import PosterSection from '../components/organisms/PosterSection';
import ContactSection from '../components/organisms/ContactSection';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Logo />
      <Section />
      <ExploreSection />
      <PosterSection />
      <ContactSection />
    </div>
  );
}

export default Home;
