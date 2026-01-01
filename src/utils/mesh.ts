export type MeshVariant = "homepage" | "deep" | "none";

export const meshBackgroundMap: Record<MeshVariant, string> = {
  homepage: `
    before:absolute before:inset-0 before:bg-background-dark before:z-0
    after:absolute after:inset-0 after:z-0
    after:bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),
              radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.22),transparent_42%),
              radial-gradient(circle_at_50%_85%,rgba(14,165,233,0.18),transparent_45%)]
  `,
  deep: `
    before:absolute before:inset-0 before:bg-background-dark
    after:absolute after:inset-0
    after:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_45%)]
  `,
  none: "bg-background-dark",
};
