import { View } from "react-native";
import React, { FC, Fragment } from "react";
import VideoSingleThumbnail from "./VideoSingleThumbnail";

type Video = {
  id: number | string;
  src: string;
};

type VideoThumbnailsProps = {
  videos: Video[];
  deleteOn: boolean;
  selectedItems: (number | string)[];
  setSelectedItems: React.Dispatch<React.SetStateAction<(string | number)[]>>;
};

const VideoThumbnails: FC<VideoThumbnailsProps> = ({
  videos,
  deleteOn,
  selectedItems,
  setSelectedItems,
}) => {
  return (
    <View className="flex-row flex-1 justify-between">
      {videos.map((v) => (
        <Fragment key={v.id}>
          <VideoSingleThumbnail
            id={v.id}
            deleteOn={deleteOn}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </Fragment>
      ))}
    </View>
  );
};

export default VideoThumbnails;
