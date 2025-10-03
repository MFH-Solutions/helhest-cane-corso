type MapProps = {
  className?: string;
};

export default function Map({ className }: MapProps) {
  return (
    <div className={`w-full ${className || ""}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22295.595451800982!2d-75.71956829230946!3d45.69198681857195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce27349025856d%3A0x5040cadae4d5910!2sVal-des-Monts%2C%20QC%20J8N%204K1!5e0!3m2!1sen!2sca!4v1759518172952!5m2!1sen!2sca"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location map showing Val-des-Monts, Quebec"
        aria-label="Interactive map of our location in Val-des-Monts, Quebec"
      />
    </div>
  );
}
