import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  url: string;
  fallbackImage?: string;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ url, fallbackImage, className }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => {
        if (isMounted) setAnimationData(data);
      })
      .catch(() => {
        if (isMounted) setError(true);
      });
    return () => { isMounted = false; };
  }, [url]);

  if (error || !animationData) {
    if (fallbackImage) {
      return <img src={fallbackImage} alt="Fallback" className={`${className} object-cover`} />;
    }
    return <div className={`${className} bg-transparent`} />;
  }

  return <Lottie animationData={animationData} loop={true} className={className} />;
};

export default LottieAnimation;