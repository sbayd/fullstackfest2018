import React from 'react';
import PropTypes from 'prop-types';
import { Image as RNImage } from 'react-native';

const Image = ({
  src,
  ...props
}) => {
  const source = typeof src === 'string' ? { uri: src } : (src || {});

  return (
    <RNImage
      source={source}
      {...props}
    />
  );
};

export default Image;
