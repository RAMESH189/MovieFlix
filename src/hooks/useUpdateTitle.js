import { useEffect } from "react";

export const useUpdateTitle = (title) => {
  useEffect(() => {
    document.title = `MovieFlix - ${title}`;
  });
  return null;
};
