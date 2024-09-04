import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS or custom CSS
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query"; // React Query setup
import reportWebVitals from "./reportWebVitals";

// Initialize React Query Client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Wrap the App with QueryClientProvider to enable React Query */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// Measure performance (optional)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
