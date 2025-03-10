import React from 'react';

interface ActionsProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

const Actions: React.FC<ActionsProps> = ({ canvasRef}) => {
    const copyToClipboard = async () => {
        if (!canvasRef.current) return;
        canvasRef.current.toBlob(async (blob) => {
            if (!blob) return;
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({ "image/png": blob })
                ]);
                alert("QR code image copied to clipboard!");
            } catch {
                alert("Failed to copy QR code");
            }
        });
    };

    const downloadQRCode = () => {
        if (!canvasRef.current) return;
        const url = canvasRef.current.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="mt-4 flex gap-4">
            <button onClick={copyToClipboard} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Copy QR Code</button>
            <button onClick={downloadQRCode} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Download</button>
        </div>
    );
};

export default Actions;