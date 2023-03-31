import React, { useContext, useState, lazy, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { userContext } from "./context/UserContext";
import { userReducerActions } from "./context/userReducer";
import { authService } from "./api/auth";

const DashboardPage = lazy(() => import("./routes/Dashboard"));
const AdminPage = lazy(() => import("./routes/Admin"));
const ProfilePage = lazy(() => import("./routes/Profile"));
const LoginPage = lazy(() => import("./routes/Login"));
const ProjectsPage = lazy(() => import("./routes/Projects"));
const LabelsPage = lazy(() => import("./routes/Labels"));
const CreateProjectPage = lazy(() => import("./routes/CreateProject"));
const EditProjectPage = lazy(() => import("./routes/EditProject"));

const CreateLabelPage = lazy(() => import("./routes/CreateLabel"));

const EditLabelPage = lazy(() => import("./routes/EditLabel"));
function App() {
  const [userState, userDispatch] = useContext(userContext);
  const [token, setToken] = useLocalStorage("token", null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <Layout>
      <Routes>
        <Route
          element={<Suspense fallback={<>...</>}><LoginPage /></Suspense>}
          path="/login"
        />
  
  
        <Route
          element={<Suspense fallback={<>...</>}><ProfilePage /></Suspense>}
          path="/profile"
        />
  

        <Route
          element={<Suspense fallback={<>...</>}><ProjectsPage /></Suspense>}
          path="/projects"
        />
        <Route
          element={<Suspense fallback={<>...</>}><CreateProjectPage /></Suspense>}
          path="/projects/create"
        />
  
        <Route
          element={<Suspense fallback={<>...</>}><EditProjectPage /></Suspense>}
          path="/projects/edit/:id"
        />  
        <Route
          element={<Suspense fallback={<>...</>}><LabelsPage /></Suspense>}
          path="/labels"
        />
  

  
        <Route
          element={<Suspense fallback={<>...</>}><CreateLabelPage /></Suspense>}
          path="/labels/create"
        />
  
        <Route
          element={<Suspense fallback={<>...</>}><EditLabelPage /></Suspense>}
          path="/labels/edit/:id"
        />
        <Route
          path="/*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </Layout>
  );
  
}

export default App;
