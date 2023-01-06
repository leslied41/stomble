import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useCallback,
} from "react";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import PostOverlay from "./PostOverlay";

type Props = {};

const SinglePost = forwardRef<any, Props>((props, parentRef) => {
  const ref = useRef<Video | null>(null);
  const [positionMillis, setPositionMillis] = useState<number>();
  const [durationMillis, setDurationMillis] = useState<number>();

  useImperativeHandle(parentRef, () => {
    return {
      play,
      stop,
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

  /**
   *
   * @returns check video status
   */
  const checkVideoStatus = useCallback(async () => {
    if (ref.current == null) return { isPlaying: false };

    const status = await ref.current.getStatusAsync();
    if (!status.isLoaded) return { isPlaying: false };
    else if (status.isPlaying) return status;
    else return { isPlaying: false };
  }, []);

  /**
   * play video
   * @returns
   */

  const play = useCallback(async () => {
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
  }, []);
  /**
   *
   * @returns pause video
   */
  const pause = useCallback(async () => {
    if (ref.current == null) return;

    const status = await ref.current.getStatusAsync();

    if (!status.isLoaded) return;
    else if (status.isPlaying) {
      try {
        await ref.current.pauseAsync();
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

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

  /**
   * get real-time position mills
   */
  const statusUpdate = useCallback((status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;
    setPositionMillis(status.positionMillis);
    setDurationMillis(status.durationMillis);
  }, []);

  return (
    <>
      <PostOverlay
        play={play}
        pause={pause}
        checkVideoStatus={checkVideoStatus}
        durationMillis={durationMillis}
        positionMillis={positionMillis}
      />
      <Video
        ref={ref}
        className="flex-1"
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay={true}
        onPlaybackStatusUpdate={statusUpdate}
        source={{
          uri: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
        }}
      />
    </>
  );
});

export default SinglePost;
