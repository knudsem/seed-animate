/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import anime from "animejs";
import { Wrapper, EnvelopContainer } from "./Seed.styles";

import Envelop1 from "./Envelop1"; 
import Envelop2 from "./Envelop2"; 

const Seed = ({
  width,
  height,
  envelopWidth,
  envelop2Height,
  envelop1Height,
  wrapperBackground,
  wrapperBackgroundHide,
  onRevealCallback,
  onRevealComplete = () => {},
}) => {
  const isLoaded = () => {
    anime({
      // Make the envelop1 translate X and rotate (see envelop1 component, initially : translateX(-200%) rotate(-45deg))
      targets: "#envelop-1",
      easing: "linear",
      translateX: 0,
      rotate:0,
      endDelay: 800,
      duration:400,
      complete: () => {
        // Make the envelop1 translate Y (half of envelop2 height, see at envelop1 component)
        translateEnvelop1();
        // Make the envelop2 scale
        anime({
          targets: "#envelop-2",
          easing:'linear',
          translateY: 1,
          scaleY : 1,
          duration:500,
          endDelay: 800,
          complete: () => {
         // Make the wrapper of envelops scale down
            anime({
              targets: "#envelopContainer",
              easing: "linear",
              scale: 0,
              duration: 800,
              complete: () => {
          // Change the background RGBA with opacity 0
                anime({
                  targets: "#wrapper",
                  backgroundColor:wrapperBackgroundHide,
                  duration: 5000,
                  complete: () => {
                    if (onRevealCallback) {
                      onRevealCallback();
                    }
                  }
                })
              },
            })
          }
        });
        onRevealComplete();
      },
    });
  };

  const translateEnvelop1 = () => {
    anime({
      targets: "#envelop-1",
      translateY: 0,
      easing:'linear',
      duration: 500
    })
  }
  
  // run isLoaded function after initial render
  useEffect(() => {
    isLoaded();
  }, []);

  return (
    <Wrapper
      width={width}
      height={height}
      id="wrapper"
      backgroundColor={wrapperBackground}
    >
      <EnvelopContainer id="envelopContainer">
        <div>
          <Envelop2 id="envelop-2" width={envelopWidth} height={envelop2Height} />
          <Envelop1 id="envelop-1" width={envelopWidth} height={envelop1Height} envelop2Height={envelop2Height} />
        </div>
      </EnvelopContainer>

    </Wrapper>
  );
};

Seed.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  envelopWidth: PropTypes.number,
  envelop2Height: PropTypes.number,
  envelop1Height: PropTypes.number,
  wrapperBackground: PropTypes.string,
  wrapperBackgroundHide: PropTypes.string,
  customPattern: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  onRevealCallback: PropTypes.func,
  onRevealComplete: PropTypes.func,
};

export default Seed;
