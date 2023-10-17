import React from "react";
import useScrollToTop from "../../../hooks/scrollToTop/useScrollToTop";
import ArrowUp from "../../../assets/svgs/ArrowUp";

const StickyScrollButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-20 bg-indigo-600 rounded-full p-4 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <ArrowUp />
    </button>
  );
};

export default StickyScrollButton;
