import React from "react";

export const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};
