import Image from "next/image";

interface ImageHostProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function ImageHost({
  src,
  alt = "Hosted Image",
  width = 800,
  height = 600,
}: ImageHostProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}