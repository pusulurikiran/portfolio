import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const DISPLAY_COUNT = 3;

type WorkExperience = {
  id: number;
  logo: string;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: "/images/work-experience/Wellsfargo.png",
    name: "Wellsfargo",
    period: { start: "Jun 24", end: "Present" },
    position: "Senior Software Engineer",
    location: "Hyderabad, INDIA",
    summary: "",
    keyFocus: ["APIGEE", "JavaScript", "API Management","Splunk","CI/CD"],
  },
  {
    id: 2,
    logo: "/images/work-experience/persistent.jpeg",
    name: "Persistent Systems",
    period: { start: "Sep 22", end: "Jun 24" },
    position: "Engineering Lead",
    location: "Hyderabad, INDIA",
    summary:
      "Worked for Wellsfargo as contrator on the API Management team. I was helping developers to build a new API for their internal use.",
    keyFocus: ["APIGEE", "JavaScript", "API Management","Splunk","CI/CD"],
  },
  {
    id: 3,
    logo: "/images/work-experience/nttdata.jpeg",
    name: "NTT DATA Services ",
    period: { start: "Apr 21", end: "Jan 22" },
    position: "Systems Integration Senior Specialist",
    location: "Hyderabad, INDIA",
    summary:"Developed API's for the client (Brunswick) to integrate with their existing systems, providing a seamless user experience.",
    keyFocus: ["APIGEE", "JavaScript", "API Management","API Development","NewRelic","CI/CD","GitHub","Azure DevOps"],
  },
  {
    id: 4,
    logo: "/images/work-experience/tcs.jpeg",
    name: "Tata Consultancy Services",
    period: { start: "Jun 2016", end: "May 20" },
    position: "System Engineer",
    location: "Bangalore, India",
    summary:
      "Contributed to the migration of the existing system to the new platform version of Ca Layer7 API Gateway. Worked on the development of the new platform. ",
    keyFocus: ["Linux", "Ca Layer7 API Gateway", "MySQL", "Shell Scripting"],
  }
];

type Props = {
  data: WorkExperience;
  isFirst: boolean;
  isLast: boolean;
};

const WorkExperience: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", { "rounded-t": isFirst, "rounded-b": isLast })} />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-[100px] h-10">
        <Image src={data.logo} alt={data.name} width={40} height={40} className="object-contain" />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>{data.position}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>

      <p className="prose prose-sm prose-neutral dark:prose-invert">{data.summary}</p>

      <p className="text-xs leading-relaxed prose-sm prose-neutral dark:prose-invert">
        <strong>Key Focus:</strong> {data.keyFocus.join(", ")}
      </p>
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  const [showMore, setShowMore] = useState(workExperiences.length > DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <WorkExperience key={data.id} data={data} isFirst={index === 0} isLast={index === 2} />
          ))}
      </div>

      {!showMore && (
        <Tippy content={`Show ${workExperiences.length - DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowMore(true)}>
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default WorkExperienceTimeline;
