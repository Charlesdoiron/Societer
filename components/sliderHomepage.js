import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { QuoteDescription } from "../styled/typos";
import Quote from "../components/quote";
import useMeasure from "../utils/useMeasure";
import { ResizeObserver } from "@juggle/resize-observer";
import { Spring, config } from "react-spring/renderprops.cjs";
import FirstSlider from "../components/firstSlide";

export const DURATION = 10000;
export const FAST_DURATION = DURATION / 4;
export const ULTRA_FAST_DURATION = 900;

const ProgressBar = (props) => {
  const [bind, { width }] = useMeasure({
    scroll: true,
    resize: true,
    polyfill: ResizeObserver,
  });
  const { startAnimation } = props;

  return (
    <div
      style={{ width: "100%", position: "absolute", left: "0", top: "0" }}
      {...bind}
    >
      <Spring
        config={{
          duration: startAnimation ? DURATION : ULTRA_FAST_DURATION,
        }}
        from={{ width: 0 }}
        to={{
          width: startAnimation ? width : 0,
        }}
      >
        {(props) => <Line style={props} />}
      </Spring>
    </div>
  );
};

class SliderHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      startAnimation: true,
      navigateToSlide: false,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: ULTRA_FAST_DURATION,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,

      autoplay: true,
      autoplaySpeed: DURATION,
      pauseOnHover: false,
      draggable: false,
      swipe: false,
      swipeToSlide: false,
      fade: true,
      touchMove: false,
      appendDots: (dots, i) => (
        <DotsContainer key={i}>
          <ul
            style={{ margin: "0px", padding: "0px ", color: "#FFF" }}
            onClick={() => {
              setTimeout(() => {
                this.setState({ startAnimation: false });
              }, 10);
            }}
          >
            {dots}
          </ul>
        </DotsContainer>
      ),
      customPaging: (i) => (
        <div
          key={i}
          style={{
            width: "30px",
            color: "white",
          }}
        >
          <Circle className="circle" />
        </div>
      ),
      beforeChange: (oldIndex, newIndex) => {
        setTimeout(() => {
          this.setState({ startAnimation: false });
        }, 10);
      },
      afterChange: (oldIndex, newIndex) => {
        setTimeout(() => {
          this.setState({ startAnimation: true, navigateToSlide: false });
        }, 10);
      },
    };

    const URL = "https://www.societer.co/fr/" || "https://www.societer.co/en/";

    return (
      <Container>
        <ProgressBar startAnimation={this.state.startAnimation} />

        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          <Spring
            config={{
              duration: this.state.startAnimation ? 400 : 300,
            }}
            delay={
              this.state.navigateToSlide
                ? {}
                : this.state.startAnimation
                ? DURATION - 400
                : 600
            }
            from={{
              opacity: this.state.startAnimation ? 1 : 0,
              transform: this.state.startAnimation
                ? "translateX(0px)"
                : "translateX(10px)",
            }}
            to={{
              opacity: this.state.startAnimation ? 0 : 1,
              transform: this.state.startAnimation
                ? "translateX(10px)"
                : "translateX(0px)",
            }}
          >
            {({ opacity, transform }) => (
              <FirstSlider
                style={{ opacity, transform }}
                target="vision"
                startAnimation={this.state.startAnimation}
              />
            )}
          </Spring>

          {this.props.quotes.map((quote, i) => {
            return (
              <Spring
                key={i}
                config={{
                  duration: this.state.startAnimation ? 400 : 300,
                }}
                delay={
                  this.state.navigateToSlide
                    ? {}
                    : this.state.startAnimation
                    ? DURATION - 400
                    : 600
                }
                from={{
                  opacity: this.state.startAnimation ? 1 : 0,
                  transform: this.state.startAnimation
                    ? "translateX(0px)"
                    : "translateX(10px)",
                }}
                to={{
                  opacity: this.state.startAnimation ? 0 : 1,
                  transform: this.state.startAnimation
                    ? "translateX(10px)"
                    : "translateX(0px)",
                }}
              >
                {({ opacity, transform }) => (
                  <>
                    {quote.fields && (
                      <Quote
                        url={URL}
                        target={quote.fields.link}
                        isNextLink={quote.fields.link.includes(URL)}
                        style={{ opacity, transform }}
                        key={i}
                        content={quote.fields.quote}
                        startAnimation={this.state.startAnimation}
                      />
                    )}
                  </>
                )}
              </Spring>
            );
          })}
        </Slider>
        <Slider
          className="secondSlider"
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={1}
          focusOnSelect={false}
          arrows={false}
          fade={true}
          swipeToSlide={false}
        >
          <p></p>
          {this.props.quotes.map((quote, i) => {
            return (
              <Spring
                key={i}
                config={{
                  duration: 400,
                }}
                delay={this.state.startAnimation ? DURATION - 600 : 300}
                from={{
                  transform: this.state.startAnimation
                    ? "translateY(0px)"
                    : "translateY(70px)",
                  opacity: this.state.startAnimation ? 1 : 0,
                }}
                to={{
                  transform: this.state.startAnimation
                    ? "translateY(70px)"
                    : "translateY(0px)",
                  opacity: this.state.startAnimation ? 0 : 1,
                }}
              >
                {({ transform, opacity }) =>
                  quote.fields && (
                    <QuoteDescription style={{ transform, opacity }}>
                      {quote.fields.quoteDescription}
                    </QuoteDescription>
                  )
                }
              </Spring>
            );
          })}
        </Slider>
      </Container>
    );
  }
}

export default SliderHomepage;

const Line = styled.div`
  height: 2px;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 0;
  left: 0;
`;
const Circle = styled.div`
  width: 8px;
  height: 8px;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 50px;
  /* ${(props) => props.theme.medias.mediumPlus`
    width: 13px;
    height: 13px;
  `} */
`;
const Container = styled.div`
  .slick-dots {
    bottom: 50px;
    z-index: 10;

    ${(props) => props.theme.medias.mediumPlus`
      bottom:-80px;
    `}
  }
  .slick-dots li button:before,
  .slick-dots li.slick-active button:before {
    color: #fff;
    font-size: 10px;
  }
  .slick-active {
    .circle {
      background-color: white;
    }
  }
  .slick-dots li {
    width: 10px;

    ${(props) => props.theme.medias.mediumPlus`
      margin-right:10px;
    `}
  }
  .slick-initialized .slick-slide {
    display: flex;
    align-items: center;
    height: 100vh;

    ${(props) => props.theme.medias.mediumPlus`
      height: auto
    `}
    .slick-initialized .slick-slide.slick-active {
      z-index: 1;
    }
  }

  .secondSlider {
    height: 40px;
    position: absolute;
    bottom: 49px;
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    overflow: hidden;

    ${(props) => props.theme.medias.mediumPlus`
        position:relative;
        bottom:40px;
    `}

    .slick-slide {
      & > div {
        width: 80%;
      }
    }
    .slick-initialized .slick-slide.slick-active {
      z-index: 1;
    }
  }
`;

const DotsContainer = styled.div`
  text-align: left;
  ${(props) => props.theme.medias.mediumPlus`
       text-align: center;
       position:relative;
    `}
`;
