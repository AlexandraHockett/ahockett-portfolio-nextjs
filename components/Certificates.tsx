import { certificates, issuer } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Certificates = () => {
  return (
    <div className="py-20" id="certificates">
      <h1 className="heading">
        My <span className="text-purple">Achievements & Certifications</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards
          items={certificates}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {issuer.map(({ id, name, nameImg }) => (
            <img
              key={id}
              src={nameImg}
              alt={name}
              className="w-16 h-16 object-contain sm:w-24 sm:h-24 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
