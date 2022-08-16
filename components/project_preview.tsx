import Link from "next/link";

export interface ProjectPreviewInterface{
  title: string;
  desc: string;
  url: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {

  return (
    <div>
      <Link href={props.url}>
        <a className="font-bold underline hover:text-indigo-500">
          {props.title}
        </a>
      </Link>
      <div>{props.desc}</div>
    </div>
  );
};

export default ProjectPreview;