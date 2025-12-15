import React from 'react';
import { Download } from 'lucide-react';

const ResumeViewer = () => {
    // Use versioned filename to ensure latest resume is loaded
    // Update this version number when you upload a new resume
    const RESUME_VERSION = 'v2';
    const resumeUrl = `/Resume_${RESUME_VERSION}.pdf`;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Manish_Kumar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="h-full flex flex-col bg-gray-100">
            {/* PDF Viewer Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
                <span className="text-sm text-gray-600">Resume.pdf</span>
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    title="Download Resume"
                >
                    <Download className="w-4 h-4" />
                    Download
                </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
                <iframe
                    src={resumeUrl}
                    className="w-full h-full border-0"
                    title="Resume PDF"
                />
            </div>
        </div>
    );
};

export default ResumeViewer;
