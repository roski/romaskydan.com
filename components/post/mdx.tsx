/* eslint-disable */
import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';

const useMdx = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function MdxContent({ code }: MdxProps) {
  const Component = useMdx(code);
  return <Component components={components} />;
}
