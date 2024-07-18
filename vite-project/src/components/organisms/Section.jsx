import React from 'react';
import Title from '../atoms/Title';
import Gallery from '../molecules/Gallery';
import haloData from '../../data/haloData';
import styles from './Section.module.css';

function Section() {
  const games = haloData.products.map(product => ({
    src: `/src/assets/images/${product.image}`,
    alt: product.text,
  }));

  return (
    <section className={styles.section}>
      <Title text="Explora los Juegos de Halo" />
      <Gallery images={games} />
    </section>
  );
}

export default Section;
