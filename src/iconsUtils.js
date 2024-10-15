'use client'
// src/app/components/preview/iconUtils.js
export const getPlatformIcon = (platform) => {
    switch (platform) {
      case "GitHub":
        return "/images/icon-github.svg";
      case "Twitter":
        return "/images/twiiter-white.svg";
      case "Twitch":
        return "/images/twitch-white.svg";
      case "Gitlab":
        return "/images/gitlab-white.svg";
      case "Facebook":
        return "/images/facebook-white.svg";
      default:
        return null; // or a default icon if needed
    }
  };

  // Function to get background color based on platform
export const getPlatformBgColor = (platform) => {
  switch (platform) {
    case "GitHub":
      return 'bg-black';
    case "Twitter":
      return 'bg-red-500';
    case "Twitch":
      return 'bg-[#8b44f7]';
    case "Gitlab":
      return 'bg-[#F46B25]';
    case "Facebook":
      return 'bg-[#149FF4]';
    default:
      return ''; // Reset if no valid platform
  }
};