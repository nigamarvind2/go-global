import { cn } from "@/lib/utils";

interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: {
    icon: "h-8",
    text: "text-base",
  },
  md: {
    icon: "h-10",
    text: "text-lg",
  },
  lg: {
    icon: "h-12",
    text: "text-2xl",
  },
};

const BrandMark = ({ size = "md", className }: BrandMarkProps) => {
  const styles = sizeStyles[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/assets/brand-icon.svg"
        alt="GoGlobalEdTechPvtLtd"
        className={cn("w-auto", styles.icon)}
      />
      <span className={cn("font-display font-semibold tracking-tight leading-none", styles.text)}>
        <span className="text-[#1E3A6D]">GoGlobal</span>
        <span className="text-[#2F65B3]">EdTech</span>
        <span className="text-slate-500">PvtLtd</span>
      </span>
    </div>
  );
};

export default BrandMark;
