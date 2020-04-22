import React, { Component, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { QuoteDescription } from "../styled/typos";
import Quote from "../components/quote";
import useMeasure from "../utils/useMeasure";
import { ResizeObserver } from "@juggle/resize-observer";
import { Spring, config } from "react-spring/renderprops.cjs";
export const DURATION = 10000;
export const FAST_DURATION = DURATION / 4;
export const ULTRA_FAST_DURATION = DURATION / 6;

const ProgressBar = (props) => {
  const [bind, { width }] = useMeasure({ polyfill: ResizeObserver });
  const { startAnimation } = props;
  return (
    <div
      style={{ width: "100%", position: "absolute", left: "0", top: "0" }}
      {...bind}
    >
      <Spring
        config={{ duration: startAnimation ? DURATION : ULTRA_FAST_DURATION }}
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
      speed: FAST_DURATION,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      easing: "ease-in",
      autoplay: true,
      autoplaySpeed: DURATION,
      pauseOnHover: false,
      swipeToSlide: true,
      beforeChange: () => this.setState({ startAnimation: false }),
      afterChange: () => this.setState({ startAnimation: true }),

      appendDots: (dots, i) => (
        <DotsContainer key={i}>
          <ul style={{ margin: "0px", padding: "0px ", color: "#FFF" }}>
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
    };
    return (
      <Container>
        <ProgressBar startAnimation={this.state.startAnimation} />
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.props.quotes.map((quote, i) => {
            return (
              /* <Link
                  href={{
                    pathname: `article/${article.fields.slug}`,
                    query: { title: quote.fields.title },
                  }}
                  as={`article/${article.fields.slug}`}
                > */

              <Spring
                config={{
                  duration: 300,
                }}
                delay={DURATION - 500}
                from={{ opacity: this.state.startAnimation ? 1 : 0 }}
                to={{
                  opacity: this.state.startAnimation ? 0 : 1,
                }}
              >
                {({ opacity }) => (
                  <Quote
                    style={{ opacity }}
                    key={i}
                    content={quote.fields.quote}
                    startAnimation={this.state.startAnimation}
                  />
                )}
              </Spring>

              /* </Link> */
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
          {this.props.quotes.map((quote, i) => {
            return (
              <div key={i}>
                <Spring
                  config={{
                    duration: 400,
                  }}
                  from={{
                    transform: "translateX(0px)",

                    position: "relative",
                  }}
                  to={{
                    transform: this.state.startAnimation
                      ? "translateX(0px)"
                      : "translateX(-10px)",
                    position: "relative",
                  }}
                >
                  {(props) => (
                    <div style={props}>
                      <QuoteDescription>
                        {quote.fields.quoteDescription}
                      </QuoteDescription>
                    </div>
                  )}
                </Spring>
              </div>
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
  ${(props) => props.theme.medias.mediumPlus`
      top: 80px;
    `}
`;
const Circle = styled.div`
  width: 8px;
  height: 8px;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 50px;
`;
const Container = styled.div`
  .slick-dots {
    bottom: 50px;
    z-index: 10;

    ${(props) => props.theme.medias.mediumPlus`
      bottom:-30px;
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
  }
  .slick-initialized .slick-slide {
    display: flex;
    align-items: center;
    height: 100vh;

    ${(props) => props.theme.medias.mediumPlus`
      height: auto
    `}
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
  }
`;

const DotsContainer = styled.div`
  text-align: left;
  ${(props) => props.theme.medias.mediumPlus`
       text-align: center;
       position:relative;
    `}
`;
