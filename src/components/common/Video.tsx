interface VideoPropsType {
  videoUrl: string;
}
const Video = ({ videoUrl }: VideoPropsType) => {
  // Extracting id from video url
  const videoUrlId = videoUrl.replace('watch?v=', 'embed/') ?? videoUrl;

  return (
    <iframe
      className="w-full h-full"
      src={videoUrlId}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
