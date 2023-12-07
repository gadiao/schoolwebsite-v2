import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

// If experiencing hydration issues, convert file to client with "use client"
export { Hero };

const Hero = (props) => {
  const { imgSrc, givenAlt } = props;

  return (
    <Paper elevation={4} sx={{ position: 'relative', height: 650 }}>
      <Image
        alt={ givenAlt }
        src={ imgSrc }
        fill
        style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
        priority
      />
    </Paper>
  );
}

Hero.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  givenAlt: PropTypes.string.isRequired,
};