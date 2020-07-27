import * as React from 'react';
import { cssReset, interopDataAttrObj } from '@interop-ui/utils';

type ArrowDOMProps = React.ComponentPropsWithRef<'svg'>;
type ArrowProps = ArrowDOMProps;

const Arrow = React.forwardRef<SVGSVGElement, ArrowProps>(function Arrow(props, forwardedRef) {
  return (
    <svg
      {...interopDataAttrObj('Arrow')}
      {...props}
      ref={forwardedRef}
      viewBox="0 0 30 10"
      preserveAspectRatio="none"
    >
      <polygon points="0,0 30,0 15,10" />
    </svg>
  );
});

Arrow.displayName = 'Arrow';
Arrow.defaultProps = {
  width: 10,
  height: 5,
};

const styles = {
  arrow: {
    ...cssReset('svg'),
  },
};

export { Arrow, styles };
export type { ArrowProps };
