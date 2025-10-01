export type MediaType = {
  id: number;
  src: string;
  alt: string;
  type: "image" | "video";
  extension: "";
  isPrimary: boolean;
  isActive: boolean;
};
