import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function CameraIcon(props: SvgProps) {
  return (
    <Svg
      width={549}
      height={476}
      preserveAspectRatio="xMinYMin slice"
      viewBox="0 0 549 476"
      fill="none"
      {...props}>
      <Path
        d="M526.76 95.045c-14.277-14.274-31.498-21.413-51.675-21.413h-63.953l-14.558-38.826c-3.618-9.325-10.229-17.368-19.846-24.128C367.115 3.921 357.266.54 347.177.54H200.996c-10.088 0-19.939 3.381-29.552 10.138-9.613 6.76-16.225 14.803-19.842 24.128l-14.56 38.826H73.089c-20.179 0-37.401 7.139-51.678 21.413C7.137 109.32 0 126.544 0 146.721v255.813c0 20.178 7.137 37.404 21.411 51.675 14.277 14.277 31.5 21.416 51.678 21.416h401.989c20.177 0 37.397-7.139 51.675-21.416 14.273-14.271 21.412-31.497 21.412-51.675V146.721c.004-20.177-7.135-37.401-21.405-51.676zM364.446 364.993c-25.029 25.03-55.147 37.548-90.362 37.548-35.215 0-65.331-12.518-90.362-37.548-25.031-25.026-37.544-55.151-37.544-90.358 0-35.218 12.517-65.333 37.544-90.364 25.028-25.031 55.148-37.544 90.362-37.544 35.214 0 65.333 12.516 90.362 37.544 25.03 25.028 37.545 55.146 37.545 90.364 0 35.207-12.514 65.329-37.545 90.358z"
        fill="#83AFAA"
      />
      <Path
        d="M274.084 192.403c-22.651 0-42.018 8.042-58.102 24.128-16.084 16.084-24.126 35.448-24.126 58.104 0 22.647 8.042 42.014 24.126 58.098 16.084 16.081 35.45 24.123 58.102 24.123 22.648 0 42.017-8.042 58.101-24.123 16.084-16.084 24.127-35.45 24.127-58.098 0-22.655-8.043-42.019-24.127-58.104-16.083-16.085-35.453-24.128-58.101-24.128z"
        fill="#83AFAA"
      />
    </Svg>
  );
}

export default CameraIcon;