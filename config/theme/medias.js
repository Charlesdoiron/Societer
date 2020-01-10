import { css } from "styled-components";

export const ScreenSizes = {
  SMALL: 375,
  MEDIUM: 768,
  LARGE: 1224,
  XLARGE: 1824
};
const sizes = {
  small: ScreenSizes.SMALL,
  medium: ScreenSizes.MEDIUM,
  large: ScreenSizes.LARGE,
  xlarge: ScreenSizes.XLARGE
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
