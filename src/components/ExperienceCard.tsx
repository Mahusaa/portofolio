import { Badge } from "~/components/ui/badge";

export interface ExperienceCardProps {
  title: string;
  positionType: string;
  company: string;
  duration: string;
  description: string;
  skills: ReadonlyArray<string>;
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, duration, description, skills, positionType }) => {
  return (
    <div className="p-6 rounded-lg border-[3px] border-navy bg-coral/10 shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
      <div className="flex flex-col gap-3">
        {/* Title & Duration */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-navy">{title}</h3>
            <p className="text-navy/70 text-sm">{company} · {positionType}</p>
          </div>
          <Badge className="bg-coral/90 text-navy border-[3px] border-navy rounded-md shadow-brutal-sm-navy hover:bg-coral text-xs md:text-base">
            {duration}
          </Badge>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm md:text-base text-navy leading-relaxed">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="bg-cream border-[3px] border-navy rounded-md shadow-brutal-sm-navy text-sm px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>

  );
};

export default ExperienceCard;

