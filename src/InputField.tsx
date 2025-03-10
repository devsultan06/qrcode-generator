import { useEffect, useState } from "react";

interface InputFieldProps {
  url: string;
  setUrl: (url: string) => void;
  generateQRCode: () => void;
  loading: boolean;
  finalized: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ url, setUrl, generateQRCode, loading, finalized }) => {
  const [buttonText, setButtonText] = useState("Generate QR Code");

  useEffect(() => {
    if (finalized) {
      setButtonText("QR Code Successfully Generated!");
      const timer = setTimeout(() => {
        setButtonText("Generate QR Code");
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [finalized]);

  return (
    <div className="input-field flex flex-col items-center">
      <p className="text-[#808080] font-metropolis mb-1 text-center">Enter any URL to generate QR Code</p>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter your URL"
        className="bg-[#2A2A2A] px-6 rounded-full h-[50px] w-full max-w-[500px] text-white outline-none"
      />
      <button
        onClick={generateQRCode}
        className="block px-6 rounded-full h-[50px] w-full max-w-[500px] mt-4 bg-gray-700 hover:bg-gray-800 text-white"
      >
        {loading ? "Generating..." : buttonText}
      </button>
    </div>
  );
};

export default InputField;
