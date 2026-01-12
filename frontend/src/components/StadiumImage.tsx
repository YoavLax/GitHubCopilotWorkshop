'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface StadiumImageProps {
  src: string;
  alt: string;
}

export default function StadiumImage({ src, alt }: StadiumImageProps) {
  const [error, setError] = useState(false);
  const [validatedSrc, setValidatedSrc] = useState('/basketball-logo.svg');

  useEffect(() => {
    // Validate that the src is a Wikimedia URL, otherwise use fallback
    if (src && src.startsWith('https://upload.wikimedia.org/')) {
      setValidatedSrc(src);
    } else {
      console.warn(`Invalid image source: ${src}. Using fallback image.`);
      setError(true);
    }
  }, [src]);

  return (
    <div className="relative w-full h-[300px]">
      <Image 
        src={error ? '/basketball-logo.svg' : validatedSrc}
        alt={alt}
        fill
        className="object-cover rounded-t-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setError(true)}
        priority
      />
    </div>
  );
}
