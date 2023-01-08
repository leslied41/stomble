import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useCallback,
  startTransition,
} from "react";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import PostOverlay from "./PostOverlay";

type Props = {
  isFirstItemOfList: boolean;
};

const SinglePost = forwardRef<any, Props>(
  ({ isFirstItemOfList = false }, parentRef) => {
    const ref = useRef<Video | null>(null);
    const [positionMillis, setPositionMillis] = useState<number>();
    const [durationMillis, setDurationMillis] = useState<number>();
    const [playing, setPlaying] = useState<boolean>(true);

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
          startTransition(() => {
            setPlaying(true);
          });
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
          startTransition(() => {
            setPlaying(false);
          });
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
     * change the positionMillis, passed to slider to enable user
     * to control play.
     */
    const updatePositionMillis = useCallback(async (millis: number) => {
      if (ref.current == null) return;
      const status = await ref.current.getStatusAsync();
      if (!status.isLoaded) return;
      else if (!status.isPlaying)
        await ref.current.setStatusAsync({
          positionMillis: Math.floor(millis),
        });
      setPositionMillis(Math.floor(millis));
    }, []);

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
          playing={playing}
          durationMillis={durationMillis}
          positionMillis={positionMillis}
          updatePositionMillis={updatePositionMillis}
          isFirstItemOfList={isFirstItemOfList}
        />
        <Video
          ref={ref}
          className="flex-1"
          resizeMode={ResizeMode.COVER}
          progressUpdateIntervalMillis={200}
          isLooping
          shouldPlay={true}
          onPlaybackStatusUpdate={statusUpdate}
          source={{
            uri: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
          }}
        />
      </>
    );
  }
);

export default SinglePost;
