import IconCloud from "./ui/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "sass",
  "tailwindcss",
  "bootstrap",
  "nextdotjs",

  "nodedotjs",
  "express",

  "mongodb",
  "prisma",
  "postgresql",
  "mysql",

  "git",
  "github",
  "visualstudiocode",

  "python",
  "java",
];

export function IconHub() {
  return (
    <div className="flex justify-center">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
