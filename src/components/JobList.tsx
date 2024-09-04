import React from "react";

// Use react-beautiful-dnd for reordering jobs.

import { DndContext, DragEndEvent, closestCorners } from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import JobCard from "./JobCard";
import { Job } from "../types/job";

interface JobListProps {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>; // Correct type for setJobs
  isDragging: boolean; // Function to handle drag-and-drop end
  setIsDragging: (isDragging: boolean) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, setJobs, isDragging }) => {
  // Function to handle drag-and-drop end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return; // If dropped outside of any droppable area, do nothing

    const getJobPos = (id: string) =>
      jobs.findIndex((job) => job.id.toString() === id);

    setJobs((prevJobs: Job[]) => {
      const originalPos = getJobPos(active.id.toString());
      const newPos = getJobPos(over.id.toString());

      // Use arrayMove to reorder the jobs array
      return arrayMove(prevJobs, originalPos, newPos);
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <div
      // style={{ padding: 8, width: 300 }} // Optional styling
      >
        <SortableContext items={jobs} strategy={verticalListSortingStrategy}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} isDragging={isDragging} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default JobList;
