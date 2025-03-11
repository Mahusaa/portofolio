import { Palette, Compass, Zap, Smartphone, Users, Headphones, type LightbulbIcon as LucideProps } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type IconName = "palette" | "compass" | "zap" | "smartphone" | "users" | "headphones"

interface FeatureCardProps {
  title: string
  description: string
  icon: IconName
}

const iconMap: Record<IconName, (props: LucideProps) => JSX.Element> = {
  palette: Palette,
  compass: Compass,
  zap: Zap,
  smartphone: Smartphone,
  users: Users,
  headphones: Headphones,
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <Card className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors group">
      <CardContent className="p-6 space-y-4">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-medium text-primary">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}


