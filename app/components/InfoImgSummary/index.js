/**
*
* InfoImgSummary
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function InfoImgSummary() {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          style={styles.image}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Joconde-XVII-anonyme-Mus%C3%A9e_%C3%89pinal.jpg/225px-Joconde-XVII-anonyme-Mus%C3%A9e_%C3%89pinal.jpg"
          alt=""
        />
      </div>
      <div style={styles.description}>
        <div>
          <h1>test</h1>
        </div>
        <div>
          <p className="peintre">Black M</p>
          <p className="annee">2017</p>
        </div>
      </div>
    </div>
  );
}

InfoImgSummary.propTypes = {};
const styles = {
  container: {
    display: '-webkit-box',
    display: '-moz-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
    flexFlow: 'row wrap',
  },
  description: {
    width: '60%',
  },
  image: { width: '100%' },
  imageContainer: {
    width: '40%',
    padding: 5,
  },
};
export default InfoImgSummary;
