import React from 'react';
import styles from './Image.module.css';

function Image({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

export default Image;
