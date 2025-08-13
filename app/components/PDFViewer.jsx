"use client";

import { useEffect } from "react";
import Script from "next/script";

const PDFViewer = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            if (window.AdobeDC) {
                clearInterval(interval);

                const adobeClientId = process.env.NEXT_PUBLIC_PDF_EMBED_API_KEY;
                const adobeDCView = new window.AdobeDC.View({
                    clientId: adobeClientId,
                    divId: "adobe-dc-view",
                });

                adobeDCView.previewFile(
                    {
                        content: {
                            location: {
                                url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
                            },
                        },
                        metaData: { fileName: "Bodea Brochure.pdf" },
                    },
                    { embedMode: "SIZED_CONTAINER" }
                );
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Load Adobe Embed SDK */}
            <Script
                src="https://acrobatservices.adobe.com/view-sdk/viewer.js"
                strategy="beforeInteractive"
            />

            {/* PDF container */}
            <div
                id="adobe-dc-view"
                style={{ height: "360px", width: "500px", border: "1px solid #ccc" }}
            />
        </>
    );
};

export default PDFViewer;
