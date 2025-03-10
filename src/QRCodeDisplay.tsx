import React from 'react';
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";

interface QRCodeDisplayProps {
  qrRef: React.Ref<HTMLDivElement>;
  finalUrl: string;
  height: number;
  blur: number;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ qrRef, finalUrl, height, blur }) => (
  <motion.div
    initial={{ height: 20, filter: "blur(10px)" }}
    animate={{ height, filter: `blur(${blur}px)` }}
    transition={{ duration: 3 }}
    className="mt-5 bg-white p-4 rounded-lg flex justify-center items-center border-2 border-dashed border-gray-500"
    style={{ width: "200px", overflow: "hidden" }}
    ref={qrRef}
  >
    <QRCodeCanvas value={finalUrl} size={200} />
  </motion.div>
);

export default QRCodeDisplay;