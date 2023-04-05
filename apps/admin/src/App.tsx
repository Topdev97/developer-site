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

function App() {
  const [token,setToken] = useLocalStorage('token',null)
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
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route element={<LoginPage />} path="/login" />
              <Route element={<ProfilePage />} path="/profile" />
              <Route element={<ProjectsPage />} path="/projects" />
              <Route element={<CreateProjectPage />} path="/projects/create" />
              <Route element={<EditProjectPage />} path="/projects/edit/:id" />
              <Route element={<LabelsPage />} path="/labels" />
              <Route element={<CreateLabelPage />} path="/labels/create" />
              <Route element={<EditLabelPage />} path="/labels/edit/:id" />
              <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
