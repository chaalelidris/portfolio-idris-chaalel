import { StaticImageData } from "next/image";

export type typeProject = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData | undefined;
  category: string[];
};
