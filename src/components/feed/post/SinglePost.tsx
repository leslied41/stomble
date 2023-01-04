import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { Video, ResizeMode } from "expo-av";

type Props = {};

const SinglePost = forwardRef<any, Props>((props, parentRef) => {
  const ref = useRef<Video | null>(null);

  useImperativeHandle(parentRef, () => {
    return {
      play,
      stop,
      getStatus,
    };
  });
  /**
   * at the same time, it will reunder three videos, when
   * the fourth video get rendered, the first one will unload.
   */
  useEffect(() => {
    () => {
      unload();
    };
  }, []);

  //getStatus
  const getStatus = async () => {
    if (ref.current == null) return;

    const status = await ref.current.getStatusAsync();
    console.log(status.isLoaded);
  };

  /**
   * play video
   * @returns
   */
  const play = async () => {
    if (ref.current == null) return;

    const status = await ref.current.getStatusAsync();

    if (!status.isLoaded) return;
    else if (!status.isPlaying) {
      try {
        await ref.current.playAsync();
      } catch (error) {
        console.log(error);
      }
    }
  };

  /**
   * stop video
   * @returns
   */

  const stop = async () => {
    if (ref.current == null) return;

    const status = await ref.current.getStatusAsync();
    if (!status.isLoaded) return;
    else if (status.isPlaying) {
      try {
        await ref.current.stopAsync();
      } catch (error) {
        console.log(error);
      }
    }
  };

  /**
   * unload video
   * currently, the flatlist render three videos at the same time,
   * when the fourth video get rendered, the first one will unload.
   * @returns
   */

  const unload = async () => {
    if (ref.current == null) return;

    const status = await ref.current.getStatusAsync();
    if (!status.isLoaded) return;

    try {
      await ref.current.unloadAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Video
      ref={ref}
      className="flex-1"
      resizeMode={ResizeMode.COVER}
      isLooping
      shouldPlay={true}
      source={{
        uri: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
      }}
    />
  );
});

export default SinglePost;
