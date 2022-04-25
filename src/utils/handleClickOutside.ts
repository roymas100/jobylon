export const handleClickOutside = (ref: any, handler: any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      e.preventDefault();
      handler(false);
      document.removeEventListener("mousedown", handleClick);
      e.stopPropagation();
    }
  };

  document.addEventListener("mousedown", handleClick);
  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
};
