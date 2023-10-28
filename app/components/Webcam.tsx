import { useEffect, useRef } from "react";

const Webcam = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef?.current;
    const getVideo = async () => {
      if (!navigator.mediaDevices.getUserMedia || video === null) return;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 }
      });

      video.srcObject = stream;
      video.play();
    };

    getVideo();
  }), [videoRef];

  return <div><video className="bg-black" ref={videoRef} /></div>;
};

export default Webcam;
