import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({ text, level }) {
  const Tag = `h${level}`;
  return <Tag className={styles.title}>{text}</Tag>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.number,
};

Title.defaultProps = {
  level: 2,
};

export default Title;
