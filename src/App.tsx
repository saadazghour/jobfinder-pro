// This is the main App component, where I will render the JobListPage and wrap it with necessary providers like React Query.

import React from "react";
import JobListPage from "./components/JobListPage";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Job Finder Pro</h1>
      {/* Render the main job listing page */}
      <JobListPage />
    </div>
  );
};

export default App;
