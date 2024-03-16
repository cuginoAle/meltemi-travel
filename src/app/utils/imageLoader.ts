interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality = 80 }: ImageLoaderProps) => {
  const url = new URL(src);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', quality.toString());
  return url.toString();
};

export { imageLoader };
