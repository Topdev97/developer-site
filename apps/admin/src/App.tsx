import { useContext, useState, lazy, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout";
import { AppContext } from "./context/AppContext";
import { useAuth } from "./hooks/useAuth";

const DashboardPage = lazy(() => import("./routes/Dashboard"));
const AdminPage = lazy(() => import("./routes/Admin"));
const ProfilePage = lazy(() => import("./routes/Profile"));
const LoginPage = lazy(() => import("./routes/Login"));

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<>...</>}>
            <LoginPage />
          </Suspense>
        }
        path="/"
      />
      <Route path='/*' element={<Navigate to='/login' replace />} />
      
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
      <Route path='/*' element={<Navigate to='/profile' replace />} />
    </Routes>
  );
};

export const AdminRoutes = () => {
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
            <AdminPage />
          </Suspense>
        }
        path="/admin"
      />
      <Route path='/*' element={<Navigate to='/profile' replace />} />
    </Routes>
  );
};

function App() {
  const [state, dispatch]: any = useContext(AppContext);
  const user = useAuth();
  const userState:any = null
  // dispatch({type:"",payload:user})
  if (userState?.role == "admin") {
    return (
      <Layout>
        <Routes>
          <Route path="/*" element={<AdminRoutes />} />
        </Routes>
      </Layout>
    );
  } else if (userState) {
    return (
      <Layout>
        <Routes>
          <Route path="/*" element={<PrivateRoutes />} />
        </Routes>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Routes>
          <Route path="/*" element={<PublicRoutes />} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
