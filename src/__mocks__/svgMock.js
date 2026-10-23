// Jest stub for SVG imports. The default Create React App SVG transform returns
// elements in a format that React 19 rejects, so tests use this simple component.
import React from 'react';

const SvgMock = React.forwardRef((props, ref) =>
  React.createElement('svg', { ref, 'data-testid': 'svg-mock', ...props })
);

export default 'svg-mock-file';
export { SvgMock as ReactComponent };
