import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import QRCodeDisplay from "./QrCodeDisplay";
import Actions from "./Actions";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [qrGenerated, setQrGenerated] = useState(false);
  const [url, setUrl] = useState("");
  const [height, setHeight] = useState(20);
  const [blur, setBlur] = useState(10);
  const [finalized, setFinalized] = useState(false);

  const [finalUrl, setFinalUrl] = useState("");
  const qrRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (qrGenerated && qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      if (canvas) {
        canvasRef.current = canvas;
      }
    }
  }, [qrGenerated]);
  const generateQRCode = () => {
    if (!url) return;

    setLoading(true);
    setQrGenerated(false);
    setFinalized(false);
    setHeight(20);
    setBlur(10);
    setFinalUrl(url);

    let increment = 20;
    const interval = setInterval(() => {
      setHeight((prev) => Math.min(prev + increment, 200));
      setBlur((prev) => Math.max(prev - 1, 0));

      if (height >= 200 && blur <= 0) clearInterval(interval);
    }, 200);

    setTimeout(() => {
      setQrGenerated(true);

      setTimeout(() => {
        setFinalized(true);
        setLoading(false);
        setUrl("");
      }, 3000);
    }, 3000);
  };

  return (
    <>
      <div className="bg-[url('/public/bg2.png')] text-[#fff] h-[100vh] w-[100%] flex flex-col items-center max-900:bg-center bg-no-repeat bg-cover">
        <Header />
        <InputField url={url} setUrl={setUrl} generateQRCode={generateQRCode} loading={loading} finalized={finalized} />
        {qrGenerated && <QRCodeDisplay qrRef={qrRef} finalUrl={finalUrl} height={height} blur={blur} />}
        {finalized && <Actions canvasRef={canvasRef} finalUrl={finalUrl} />}
        {!loading && !qrGenerated && (
          <img src="/frame.png" alt="Frame Image" className="mt-5 w-full max-w-[500px]" />
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;
