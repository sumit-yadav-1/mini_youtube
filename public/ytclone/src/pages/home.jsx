import { videos } from "../components/data/dummyVideos";
import VideoCard from "../components/videocard";
import { useState } from "react";

function Home({ watchLater, setWatchLater, darkMode }) {
  const [liked, setLiked] = useState(() => JSON.parse(sessionStorage.getItem("liked")) || []);

  const handleLike = (id) => {
    const updated = liked.includes(id) ? liked.filter((vid) => vid !== id) : [...liked, id];
    setLiked(updated);
    sessionStorage.setItem("liked", JSON.stringify(updated));
  };

  const handleWatchLater = (id) => {
    const updated = watchLater.includes(id)
      ? watchLater.filter((vid) => vid !== id)
      : [...watchLater, id];
    setWatchLater(updated);
    sessionStorage.setItem("watchLater", JSON.stringify(updated));
  };

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
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          liked={liked.includes(video.id)}
          onLike={handleLike}
          inWatchLater={watchLater.includes(video.id)}
          onToggleWatchLater={handleWatchLater}
        />
      ))}
    </div>
  );
}

export default Home;