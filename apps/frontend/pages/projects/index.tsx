import Head from "next/head";
import { Layout } from "../../components/Layout";
import { ProjectCard } from "../../components/ProjectCard/";
import { useGetProjects } from "../../hooks/useGetProjects";
import { Project } from "../../models/project.model";
import { SpinLoader } from "../../components/loaders/SpinLoader";
import { BubbleLoader } from "../../components/loaders/BubbleLoader";

export default function Projects() {
  const { projects, loading, error } = useGetProjects();

  if (loading) {
    return (
      <>
        <Head>
          <title>Projects - davc93</title>
          <meta
            name="description"
            content="My Web projects collection made with love by davc3"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <main className="flex justify-center" style={{height:"80vh"}}>
            <BubbleLoader width={30} height={30} gap={20}/>
          </main>
        </Layout>
      </>
    );
  } else if (projects) {
    console.log(projects);
    return (
      <>
        <Head>
          <title>Projects - davc93</title>
          <meta
            name="description"
            content="My Web projects collection made with love by davc3"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <main className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:mx-8">
            {projects.map((project: Project) => {
              return <ProjectCard key={project.id} {...project} />;
            })}
          </main>
        </Layout>
      </>
    );
  } else if (error){
    return (
      <>
        <Head>
          <title>Projects - davc93</title>
          <meta
            name="description"
            content="My Web projects collection made with love by davc3"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <main className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:mx-8">
            <h2>Content not available , try later</h2>
          </main>
        </Layout>
      </>
    )
  }
}
