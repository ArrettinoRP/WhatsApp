import React from 'react';
import Svg, {SvgProps, Circle} from 'react-native-svg';

function OptionsIcon(props: SvgProps) {
  return (
    <Svg
      width={4}
      height={16}
      preserveAspectRatio="xMinYMin slice"
      viewBox="0 0 4 16"
      fill="none"
      {...props}>
      <Circle cx={2} cy={8} r={2} fill="#fff" />
      <Circle cx={2} cy={2} r={2} fill="#fff" />
      <Circle cx={2} cy={14} r={2} fill="#fff" />
    </Svg>
  );
}

export default OptionsIcon;
