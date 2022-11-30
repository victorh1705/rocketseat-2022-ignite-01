import React, {ImgHTMLAttributes} from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean | false
}

export default function Avatar({hasBorder, ...props}: AvatarProps) {
  return (
    <img
      className={`h-12 w-12 bg-neutral-800 rounded-md box-content ${hasBorder &&
      'p-1 border-2 border-emerald-600 outline-2'}`} src="https://github.com/victorh1705.png"
      {...props}
    />
  );
}
