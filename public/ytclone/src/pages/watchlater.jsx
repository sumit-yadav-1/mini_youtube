import { videos } from "../components/data/dummyVideos";
import VideoCard from "../components/videocard";

function WatchLater({ watchLater, setWatchLater, darkMode }) {
  const handleToggleWatchLater = (id) => {
    const updated = watchLater.filter((vid) => vid !== id);
    setWatchLater(updated);
    sessionStorage.setItem("watchLater", JSON.stringify(updated));
  };

  const filteredVideos = videos.filter((v) => watchLater.includes(v.id));

  return (
    <div
      className="flex flex-wrap ml-[40px] gap-[55px]"
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        paddingTop: "20px",
        paddingBottom: "40px",
      }}
    >
      {filteredVideos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          liked={false}
          onLike={() => {}}
          inWatchLater={true}
          onToggleWatchLater={handleToggleWatchLater}
        />
      ))}
    </div>
  );
}

export default WatchLater;