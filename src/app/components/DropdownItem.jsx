'use client'
import { useState, useRef, useEffect } from "react";

export default function DropdownItem({ onPlatformSelect }) {
  const [selectedText, setSelectedText] = useState("Select a platform");
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const dropdownButtonRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleSelect = (platform, logoSrc) => {
    setSelectedText(platform);
    setSelectedLogo(logoSrc);
    setIsMenuVisible(false);
    onPlatformSelect(platform);  // Pass selected platform back to parent
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target) &&
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target)
      ) {
        setIsMenuVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-3">
      <label htmlFor="platform" className="block text-gray-700 mb-1">Platform</label>
      <div className="relative inline-block w-full">
        <button
          ref={dropdownButtonRef}
          id="dropdownButton"
          onClick={toggleDropdown}
          className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md flex justify-between items-center"
        >
          <span className="flex items-center gap-2">
            {selectedLogo && (
              <img
                id="selectedLogo"
                src={selectedLogo}
                alt="Selected Logo"
                className="h-5 w-5"
              />
            )}
            <span id="selectedText">{selectedText}</span>
          </span>
          <img
            src="/images/icon-chevron-down.svg"
            alt="arrow"
            className="ml-2 h-5 w-5"
          />
        </button>

        {isMenuVisible && (
          <div
            ref={dropdownMenuRef}
            id="dropdownMenu"
            className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg"
          >
            <ul className="py-1">
              <li>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleSelect("GitHub", "/images/github-gray.svg")}
                >
                  <img
                    src="/images/github-gray.svg"
                    alt="GitHub"
                    className="h-5 w-5"
                  />
                  <span>GitHub</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleSelect("Twitter", "/images/icon-twitter.svg")}
                >
                  <img
                    src="/images/icon-twitter.svg"
                    alt="Twitter"
                    className="h-5 w-5"
                  />
                  <span>Twitter</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleSelect("Twitch", "/images/icon-twitch.svg")}
                >
                  <img
                    src="/images/icon-twitch.svg"
                    alt="Twitch"
                    className="h-5 w-5"
                  />
                  <span>Twitch</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleSelect("Gitlab", "/images/icon-gitlab.svg")}
                >
                  <img
                    src="/images/icon-gitlab.svg"
                    alt="Gitlab"
                    className="h-5 w-5"
                  />
                  <span>Gitlab</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleSelect("Facebook", "/images/icon-facebook.svg")}
                >
                  <img
                    src="/images/icon-facebook.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                  <span>Facebook</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
