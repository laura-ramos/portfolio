import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import './index.css'
import { AboutMe } from './pages/AboutMe.tsx';
import { Experience } from './pages/Experience.tsx';
import { Education } from './pages/Education.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { Projects } from './pages/Projects.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    
  </StrictMode>,
)
