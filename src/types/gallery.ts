export type MediaType = {
  id: number;
  src: string;
  alt: string;
  type: "image" | "video";
  extension: "jpg" | "jpeg" | "png" | "mp4";
  isPrimary: boolean;
  isActive: boolean;
};
