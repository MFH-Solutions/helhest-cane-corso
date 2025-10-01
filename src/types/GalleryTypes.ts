export type MediaType = {
  id: number;
  src: string;
  alt: string;
  type: "image" | "video";
  isPrimary: boolean;
  isActive: boolean;
};
