import { cn } from "@/lib/utils";

interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: {
    icon: "h-9 w-9",
    text: "text-base",
  },
  md: {
    icon: "h-11 w-11",
    text: "text-lg",
  },
  lg: {
    icon: "h-14 w-14",
    text: "text-2xl",
  },
};

const BrandMark = ({ size = "md", className }: BrandMarkProps) => {
  const styles = sizeStyles[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img
        src="/assets/go-global-logo.jpg"
        alt="GoGlobalEdTechPvtLtd"
        className={cn("rounded-lg object-contain", styles.icon)}
      />
      <span className={cn("font-semibold tracking-tight leading-none", styles.text)}>
        <span className="text-foreground">GoGlobal</span>
        <span className="text-primary"> EdTech</span>
      </span>
    </div>
  );
};

export default BrandMark;
