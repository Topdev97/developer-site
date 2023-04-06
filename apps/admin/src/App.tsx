import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AuthContext } from "./context/AuthContext";
import { UserContext, initialState, userReducer } from "./context/UserContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import React, { useReducer } from "react";
import { LoginPage } from "./routes/login";
import { ProfilePage } from "./routes/profile";
import { ProjectsPage } from "./routes/projects";
import { CreateProjectPage } from "./routes/project-create";
import { EditProjectPage } from "./routes/project-edit";
import { LabelsPage } from "./routes/labels";
import { CreateLabelPage } from "./routes/label-create";
import { EditLabelPage } from "./routes/label-edit";
import { AuthRoute } from "./components/AuthRoute";

function App() {
  const [token,setToken] = useLocalStorage('token')
  const [state,dispatch] = useReducer(userReducer,initialState)
  const [darkMode,setDarkMode] = useLocalStorage('darkmode',false)
  React.useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
    }
  },[])
  return (
    <AuthContext.Provider value={{token,setToken}}>
      <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter basename="admin">
          <Layout>
            <Routes>
              <Route element={<LoginPage /> } path="/login" />
              <Route element={<AuthRoute><ProfilePage /></AuthRoute>} path="/profile" />
              <Route element={<AuthRoute><ProjectsPage /></AuthRoute>} path="/projects" />
              <Route element={<AuthRoute><CreateProjectPage /></AuthRoute>} path="/projects/create" />
              <Route element={<AuthRoute><EditProjectPage /></AuthRoute>} path="/projects/edit/:id" />
              <Route element={<AuthRoute><LabelsPage /></AuthRoute>} path="/labels" />
              <Route element={<AuthRoute><CreateLabelPage /></AuthRoute>} path="/labels/create" />
              <Route element={<AuthRoute><EditLabelPage /></AuthRoute>} path="/labels/edit/:id" />

              <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
