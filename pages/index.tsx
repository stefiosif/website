import type { NextPage } from 'next'
import AboutMe from '../components/about_me'
import ProjectPreview from '../components/project_preview'

const Home: NextPage = () => {

  const doneProjectMetadata = [];

  doneProjectMetadata.push(
    {
      title: "covid-article-search-engine",
      desc: "Information retrieval system built with Lucene and JavaFX.",
      url: "/lucene_project"
    }
  )

  doneProjectMetadata.push(
    {
      title: "text-to-speech-editor",
      desc: "Text-to-speech (TTS) application built with Java Swing.",
      url: "/tts_project"
    }
  )

  doneProjectMetadata.push(
    {
      title: "rtree",
      desc: "R-Tree bulk loading using Morton space filling curve. Range and kNN queries.",
      url: "/rtree_project"
    }
  )

  const doneProjectPreviewElements = [];

  for (var val of doneProjectMetadata){
    const element = <ProjectPreview {...val} />;
    doneProjectPreviewElements.push(element);
  }

  const currentProjectMetadata = [];

  currentProjectMetadata.push(
    {
      title: "dynamic-reachability-algorithms",
      desc: "Implementation of dynamic reachability algorithms by Roditty and Zwick.",
      url: "/thesis_project"
    }
  )

  currentProjectMetadata.push(
    {
      title: "main-memory-quadtree",
      desc: "Experimentation with a 2d spatial index and modern main memory capacity.",
      url: "/mmqt_project"
    }
  )

  const currentProjectPreviewElements = [];

  for (var val of currentProjectMetadata){
    const element = <ProjectPreview {...val} />;
    currentProjectPreviewElements.push(element);
  }

  return(
    <div>
      <div className="text-slate-600 flex flex-col gap-6">
        <AboutMe />
        <div className="text-xl font-bold text-slate-800">Completed projects</div>
        <div className="flex flex-col gap-4">{doneProjectPreviewElements}</div>
        <div className="text-xl font-bold text-slate-800">Currently working on</div>
        <div className="flex flex-col gap-4">{currentProjectPreviewElements}</div>
      </div>
    </div>
  );
};

export default Home;
