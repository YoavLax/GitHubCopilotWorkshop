"use client";

import React, { useState } from "react";

interface TeamLogoProps {
  src?: string;
  alt: string;
  teamName: string;
  className?: string;
}

export function TeamLogo({ src, alt, teamName, className = "w-8 h-8" }: TeamLogoProps) {
  const [hasError, setHasError] = useState(false);

  const teamInitials = teamName
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (!src || hasError) {
    return (
      <div className={`${className} bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600`}>
        {teamInitials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain`}
      onError={() => setHasError(true)}
    />
  );
}
