import { certificates, companies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Certificates = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        My <span className="text-purple">Achievements & Certifications</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards
          items={certificates}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Certificates;
