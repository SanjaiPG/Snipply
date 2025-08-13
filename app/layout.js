export const metadata = {
    title: "Adobe PDF Embed App",
    description: "Using Adobe PDF Embed API in Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}