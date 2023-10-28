import useZxing from "@/lib/useZxing";

const Webcam = () => {
  const onResult = (result: any) => {
    console.log("WE GOT ONE!", result);
  };
  const onError = (error: Error) => {
    console.log("ERROR!", error);
  };
  const { ref: videoRef } = useZxing({ onResult, onError });
  return <div><video className="bg-black" ref={videoRef} /></div>;
};

export default Webcam;
