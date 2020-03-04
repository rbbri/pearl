import React  from 'react';
import PropTypes from 'prop-types'
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);


  const Gallery = ({ photos }) => {
  const media = []
  photos.forEach(element => {
      const image = !!element.image.childImageSharp ? element.image.childImageSharp.fluid.src : element.image;
      media.push(
          { source: image },
      )
  });


  return (
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000} bullets={false} organicArrows={false} media ={media}></AutoplaySlider>
  )
  

  }


Gallery.propTypes = {
  photos: PropTypes.array
}

export default Gallery