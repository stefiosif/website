import type { NextPage } from 'next'
import AboutMe from '../components/about_me'
import ProjectPreview from '../components/project_preview'

const Home: NextPage = () => {

  const doneProjectMetadata = [];

  doneProjectMetadata.push(
    {
      title: "covid-article-search-engine",
      desc: "Information retrieval system built with Lucene and JavaFX.",
      url: "https://github.com/stefiosif/covid-article-search-engine"
    }
  )

  doneProjectMetadata.push(
    {
      title: "text-to-speech-editor",
      desc: "Text-to-speech (TTS) application built with Java Swing.",
      url: "https://github.com/stefiosif/text-to-speech-editor"
    }
  )

  doneProjectMetadata.push(
    {
      title: "rtree",
      desc: "R-Tree bulk loading using Morton space filling curve. Range and kNN queries.",
      url: "https://github.com/stefiosif/rtree"
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
      url: "/"
    }
  )

  currentProjectMetadata.push(
    {
      title: "main-memory-quadtree",
      desc: "Experimentation with a 2d spatial index and modern main memory capacity.",
      url: "https://github.com/stefiosif/main-memory-quadtree"
    }
  )

  const currentProjectPreviewElements = [];

  for (var val of currentProjectMetadata){
    const element = <ProjectPreview {...val} />;
    currentProjectPreviewElements.push(element);
  }

  return(
    <div>
      <div className="text-slate-600 flex flex-col gap-1">
        <AboutMe />
        <br/>
        <div className="text-xl font-bold text-slate-800">Projects</div>
        <div className="flex flex-col gap-2">{doneProjectPreviewElements}</div>
        <br/>
        <div className="text-xl font-bold text-slate-800">Under construction</div>
        <div className="flex flex-col gap-2">{currentProjectPreviewElements}</div>
      </div>
    </div>
  );
};

export default Home;
