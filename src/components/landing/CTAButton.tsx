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
        "group inline-flex items-center gap-3 rounded-xl px-8 py-4 text-sm tracking-[0.18em] uppercase font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-[linear-gradient(135deg,#b8956a_0%,#8a6a48_50%,#6b4d2e_100%)] text-white shadow-glow hover:shadow-elegant hover:-translate-y-0.5",
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
