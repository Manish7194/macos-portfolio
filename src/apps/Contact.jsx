import React from 'react';
import { Github, Mail, Twitter, Linkedin } from 'lucide-react';

const ContactWindow = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center p-8 bg-white">
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full bg-gray-300 mb-6 overflow-hidden">
                <img
                    src="/profilej.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl">👨‍💻</div>';
                    }}
                />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h2>

            {/* Message */}
            <p className="text-gray-600 text-center mb-8 max-w-md">
                Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
            </p>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <a
                    href="https://github.com/Manish7194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-red-400 hover:bg-red-500 text-white rounded-lg transition-colors"
                >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">Github</span>
                </a>

                <a
                    href="mailto:manishmourya7194@gmail.com"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-green-400 hover:bg-green-500 text-white rounded-lg transition-colors"
                >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Email</span>
                </a>

                <a
                    href="https://x.com/Manish_Kumar719"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition-colors"
                >
                    <Twitter className="w-5 h-5" />
                    <span className="font-medium">Twitter/X</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/manish-kumar1108/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-colors"
                >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                </a>
            </div>
        </div>
    );
};

export default ContactWindow;
