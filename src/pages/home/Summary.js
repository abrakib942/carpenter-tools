import {
  ChartPieIcon,
  FlagIcon,
  ThumbUpIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

import SummaryCard from "./SummaryCard";

const Summary = () => {
  const summaries = [
    {
      id: 1,
      icon: <FlagIcon />,
      number: 65,
      text: "Countries",
    },
    {
      id: 2,
      icon: <ChartPieIcon />,
      number: 12000,
      text: "Total Purchase",
    },
    {
      id: 3,
      icon: <UserGroupIcon />,
      number: 2550,
      text: "Happy Clients",
    },
    {
      id: 4,
      icon: <ThumbUpIcon />,
      number: 2130,
      text: "Feedbacks",
    },
  ];

  return (
    <div className="mb-16 px-16">
      <h2 className="text-center text-3xl text-accent font-bold">
        MILLIONS BUSINESS TRUST US
      </h2>
      <div
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="900"
        className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-8 my-10"
      >
        {summaries?.map((summary) => (
          <SummaryCard key={summary.id} summary={summary}></SummaryCard>
        ))}
      </div>
    </div>
  );
};

export default Summary;
