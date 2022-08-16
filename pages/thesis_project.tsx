import type { NextPage } from 'next'
import Link from 'next/link';

const ThesisProject: NextPage = () => {
  return(
    <div>
      <div>hi..</div>
      <div className="mt-6">
        <Link href={"/"}>
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default ThesisProject;
