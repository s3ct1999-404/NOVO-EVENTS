import * as React from "react";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function Image({ fill, priority, sizes, ...props }: ImageProps) {
  return <img {...props} />;
}
