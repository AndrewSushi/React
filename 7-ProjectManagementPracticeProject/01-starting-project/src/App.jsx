import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelNewProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projecdtId = Math.random()
      const newProject = {
        ...projectData,
        id: projecdtId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...projectsState.projects, newProject]
      }
    })
  }

  console.log(projectsState)

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancelNewProject={handleCancelNewProject}/>
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
