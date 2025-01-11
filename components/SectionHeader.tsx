import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title?: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center space-y-6">
        <p className="text-3xl lg:text-6xl text-center mt-6 uppercase font-semibold  bg-gradient-to-r from-fuchsia-400 via-teal-400 to-emerald-300  bg-clip-text text-transparent max-w-[640px]">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-3xl md:text-5xl text-center">{title}</h2>
      {description && (
        <div className="mx-auto text-center max-w-2xl text-gray-400">
          <TextGenerateEffect words={description} className="text-gray-400" />
        </div>
      )}
    </div>
  );
};
