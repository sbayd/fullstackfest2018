import React from 'react';
import Styled from 'styled-components';
import Card from './../Fields/Card';
import Image from './../Fields/Image';
import Text from './../Fields/Text';

const StyledCard = Styled(Card)`
  background-color: #E86447;
  height: 250px;
  width: 250px;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
`;

const StyledImage = Styled(Image)`
  height: 200px;
`;

const StyledText = Styled(Text)`
  color: white;
  font-size: 20px;
`;

export default class ProfileBox extends React.Component { 
  render() {
    const { name, photoSrc } = this.props;
    return (
      <StyledCard>
        <StyledImage src={photoSrc} />
        <StyledText>Hey, {name}!</StyledText>
      </StyledCard>
    )
  }
}

ProfileBox.defaultProps = {
  name: 'Rick',
  photoSrc: 'http://flippy.sbaydin.com/static/media/rick.cb66f414.png'
};
