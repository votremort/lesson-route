import React from 'react';

import PropTypes from 'prop-types';

export const Typo = ({ size, bold }) => {
  const x = bold ? '700' : '400';
  return(
    <Typo style={{fontSize: {size}, fontWeight: x}}></Typo>
  )
}

Typo.propTypes = {
  size: PropTypes.string,
  bold: PropTypes.bool
}