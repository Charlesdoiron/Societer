import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { QuoteDescription } from "../styled/typos";
import Quote from "../components/quote";
import Link from "next/link";

class SliderHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      animate: true,
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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      easing: "ease-in",
      autoplay: false,
      autoplaySpeed: 6000,

      beforeChange: () => this.setState({ animate: false }),
      afterChange: () => this.setState({ animate: true }),

      appendDots: (dots) => (
        <DotsContainer>
          <ul style={{ margin: "0px", padding: "0px ", color: "#FFF" }}>
            {dots}
          </ul>
        </DotsContainer>
      ),
      customPaging: (i) => (
        <div
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
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.props.quotes.map((quote) => {
            return (
              <>
                {/* <Link
                  href={{
                    pathname: `article/${article.fields.slug}`,
                    query: { title: quote.fields.title },
                  }}
                  as={`article/${article.fields.slug}`}
                > */}
                <Quote
                  content={quote.fields.quote}
                  animate={this.state.animate}
                />

                {/* </Link> */}
              </>
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
          {this.props.quotes.map((quote) => {
            return (
              <div>
                <QuoteDescription>
                  {quote.fields.quoteDescription}
                </QuoteDescription>
              </div>
            );
          })}
        </Slider>
      </Container>
    );
  }
}

export default SliderHomepage;

const Circle = styled.div`
  width: 13px;
  height: 13px;
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
