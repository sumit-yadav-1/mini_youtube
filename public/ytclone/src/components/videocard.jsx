function VideoCard({ video, liked, onLike, inWatchLater, onToggleWatchLater, darkMode }) {
  return (
    <div className="w-[300px] bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
      <div>
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{
            width: "300px",
            height: "170px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>
      <div className="mt-2 ml-[5px]">
        <h3 className="font-semibold text-lg text-black dark:text-white">{video.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{video.channel}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{video.views} • {video.time}</p>
      </div>
      <div className="flex justify-between mt-2 ml-[5px]">
        <button 
          onClick={() => onLike(video.id)} 
          className="text-black dark:text-white"
          style={{
            color: darkMode ? "#fff" : "black",
            backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#c9c2c2",
          }}
        >
          {liked ? "❤️Liked" : "♡ Like"}
        </button>
        <button 
          onClick={() => onToggleWatchLater(video.id)} 
          className="text-black dark:text-white"
          style={{
            color: darkMode ? "#fff" : "black",
            backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#c9c2c2",
          }}
        >
          {inWatchLater ? "✔ Watch Later" : "➕ Watch Later"}
        </button>
      </div>
    </div>
  );
}

export default VideoCard;