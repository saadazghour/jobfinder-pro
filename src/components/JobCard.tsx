import React, { useState } from "react";

import { Job } from "../types/job";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Extracting skills as an array of names
  const skills = job.skills?.map((skill) => skill.name).join(", ");

  // Extracting category from tags
  const category =
    job.tags?.find((tag) => tag.name.toLowerCase() === "category")?.value ||
    "Not specified";

  // Extracting company from tags
  const company =
    job.tags?.find((tag) => tag.name.toLowerCase() === "company")?.value ||
    "Not specified";

  return (
    <div
      className="p-4 mb-4 bg-white rounded-md shadow-md cursor-pointer"
      onClick={handleExpand}
    >
      <div>
        <h3 className="text-lg font-semibold">{job.name}</h3>
        <p className="text-sm text-gray-500">
          Created on: {new Date(job.created_at).toLocaleDateString()}
        </p>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="p-4 mt-4 border-l-4 border-blue-500 rounded-md shadow-sm bg-gray-50">
          <p className="mb-2 text-sm leading-relaxed text-gray-800">
            <strong className="font-semibold text-blue-600">
              Description:
            </strong>{" "}
            {job.summary || "No description provided"}
          </p>

          {skills && (
            <p className="mb-2 text-gray-700">
              <strong>Skills:</strong> {skills}
            </p>
          )}

          <p className="mb-2 text-gray-700">
            <strong>Location:</strong>{" "}
            {job.location?.text || "Location not specified"}
          </p>

          <p className="mb-2 text-gray-700">
            <strong>Category:</strong> {category}
          </p>

          <p className="mb-2 text-gray-700">
            <strong>Company:</strong> {company}
          </p>
        </div>
      )}
    </div>
  );
};

export default JobCard;
