import React from 'react';

interface ActionsProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

const Actions: React.FC<ActionsProps> = ({ canvasRef }) => {
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
        <div className="mt-4 ">
            <p className='block'>Click to copy or download</p>
            <div className='flex justify-center items-center gap-4 mt-4'>
                <div className='cursor-pointer button p-2 rounded-[10px]' onClick={copyToClipboard}>
                    <img src="/public/copy.png" alt="" />
                </div>
                <div className='cursor-pointer button p-2 rounded-[10px]' onClick={downloadQRCode}>
                    <img src="/public/download.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Actions;