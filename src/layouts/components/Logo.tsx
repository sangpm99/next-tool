export default function Logo() {
  return (
    <video
      autoPlay
      muted
      playsInline
      loop
      className="w-[50px] h-auto object-cover top-0 left-0 z-0"
    >
      <source src="/images/logo.webm" type="video/mp4" />
      Logo
    </video>
  );
}
