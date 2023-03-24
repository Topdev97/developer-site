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

  React.useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        setLoading(true);
        try {
          const profile = await authService.getProfile(token);
          userDispatch({ type: userReducerActions.SET_USER, payload: profile });
        } catch (error) {
          setError(`${error}`);
        }
        setLoading(false);
      } else {
        userDispatch({ type: userReducerActions.SET_USER, payload: null });
      }
    };
    checkAuth();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  } else {
    if (userState) {
      if (userState.role == "admin") {
        console.log("eres admin");

        return (
          <Layout>
            <Routes>
              <Route path="/*" element={<AdminRoutes />} />
            </Routes>
          </Layout>
        );
      } else {
        console.log("solo eres usuario");

        return (
          <Layout>
            <Routes>
              <Route path="/*" element={<PrivateRoutes />} />
            </Routes>
          </Layout>
        );
      }
    } else {
      console.log("no estas autenticado");
      return (
        <Layout>
          <Routes>
            <Route path="/*" element={<PublicRoutes />} />
          </Routes>
        </Layout>
      );
    }
  }
}

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<>...</>}>
            <LoginPage />
          </Suspense>
        }
        path="/login"
      />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<>...</>}>
            <DashboardPage />
          </Suspense>
        }
        path="/dashboard"
      />
      <Route
        element={
          <Suspense fallback={<>...</>}>
            <ProfilePage />
          </Suspense>
        }
        path="/profile"
      />

      <Route
        element={
          <Suspense fallback={<>...</>}>
            <ProjectsPage />
          </Suspense>
        }
        path="/projects"
      />

      <Route
        element={
          <Suspense fallback={<>...</>}>
            <LabelsPage />
          </Suspense>
        }
        path="/labels"
      />
      <Route path="/*" element={<Navigate to="/profile" replace />} />
    </Routes>
  );
};

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<>...</>}>
            <ProfilePage />
          </Suspense>
        }
        path="/profile"
      />
      <Route
        element={
          <Suspense fallback={<>...</>}>
            <AdminPage />
          </Suspense>
        }
        path="/admin"
      />

      <Route
        element={
          <Suspense fallback={<>...</>}>
            <ProjectsPage />
          </Suspense>
        }
        path="/projects"
      />

      <Route
        element={
          <Suspense fallback={<>...</>}>
            <LabelsPage />
          </Suspense>
        }
        path="/labels"
      />
      <Route
        element={
          <Suspense fallback={<>...</>}>
            <CreateProjectPage />
          </Suspense>
        }
        path="/projects/create"
      />

<Route
        element={
          <Suspense fallback={<>...</>}>
            <EditProjectPage/>
          </Suspense>
        }
        path="/projects/edit/:slug"
      />
      <Route
        element={
          <Suspense fallback={<>...</>}>
            <CreateLabelPage />
          </Suspense>
        }
        path="/labels/create"
      />

<Route
        element={
          <Suspense fallback={<>...</>}>
            <EditLabelPage/>
          </Suspense>
        }
        path="/labels/edit/:slug"
      />
      <Route path="/*" element={<Navigate to="/profile" replace />} />
    </Routes>
  );
};

export default App;
