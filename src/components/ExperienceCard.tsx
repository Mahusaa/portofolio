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
    <div className="p-6 rounded-md border-3 border-navy bg-coral/10 shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-navy/70">{company} · {positionType}</p>
          </div>
          <Badge className="px-2 py-1 md:px-3 md:py-1.5 text-sm md:text-base lg:text-lg bg-coral/80 text-navy border-[3px] border-navy rounded-md shadow-brutal-sm-navy md:shadow-brutal-md-navy lg:shadow-brutal-lg-navy hover:bg-coral">
            {duration}
          </Badge>
        </div>
        <p className="mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

