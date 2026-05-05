import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTAButton({
  children,
  className,
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      href="#cta"
      className={cn(
        "group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm tracking-[0.18em] uppercase font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-gradient-gold text-primary-foreground shadow-glow hover:shadow-elegant hover:-translate-y-0.5",
        variant === "outline" &&
          "border border-gold text-foreground hover:bg-gold/10",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
