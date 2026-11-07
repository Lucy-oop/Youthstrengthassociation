import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, text, align = "left", className = "" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <p className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-muted">{text}</p>}
    </Reveal>
  );
}
