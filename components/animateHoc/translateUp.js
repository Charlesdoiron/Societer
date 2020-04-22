import React from "react";
import { Spring, config } from "react-spring/renderprops.cjs";
import VisibilitySensor from "react-visibility-sensor";

export default (WrappedComponent) => {
  return function wrappedRender(props) {
    return (
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring
            config={{ delay: 50 }}
            from={{
              transform: !isVisible ? "translateY(-30px)" : "translateY(0px)",
              opacity: !isVisible ? 0 : 1,
            }}
            to={{
              transform: isVisible ? "translateY(0px)" : "translateY(-30px)",
              opacity: isVisible ? 1 : 0,
            }}
          >
            {({ transform, opacity }) => (
              <div style={{ transform, opacity }}>
                <WrappedComponent {...props} />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    );
  };
};
