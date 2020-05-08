import { css } from "styled-components";

export const ScreenSizes = {
  SMALL: 375,
  MEDIUM: 768,
  MEDIUMPLUS: 850,
  MEDIUMLARGE: 1000,
  LARGE: 1224,
  LARGEPLUS: 1700,
  XLARGE: 1824,
};
const sizes = {
  small: ScreenSizes.SMALL,
  medium: ScreenSizes.MEDIUM,
  mediumPlus: ScreenSizes.MEDIUMPLUS,
  mediumLarge: ScreenSizes.MEDIUMLARGE,
  large: ScreenSizes.LARGE,
  largePlus: ScreenSizes.LARGEPLUS,
  xlarge: ScreenSizes.XLARGE,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
