import { cn } from "@/lib/utils";

interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: {
    icon: "h-10 w-10",
    text: "text-lg",
    tagline: "text-[10px]",
  },
  md: {
    icon: "h-12 w-12",
    text: "text-xl",
    tagline: "text-xs",
  },
  lg: {
    icon: "h-14 w-14",
    text: "text-2xl",
    tagline: "text-sm",
  },
};

const BrandMark = ({ size = "md", showTagline = true, className }: BrandMarkProps) => {
  const styles = sizeStyles[size];

  return (
    <div className={cn("flex items-center", className)}>
      <div className="leading-tight">
        <div className={cn("font-display font-semibold tracking-tight", styles.text)}>
          <span className="text-foreground">GoGlobal</span>
          <span className="text-primary">EdTech</span>
          <span className="text-muted-foreground">PvtLtd</span>
        </div>
        {showTagline && (
          <div className={cn("text-muted-foreground", styles.tagline)}>
            Global study guidance from India
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandMark;
