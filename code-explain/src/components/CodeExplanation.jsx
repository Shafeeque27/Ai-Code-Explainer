import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const CodeExplanation = ({ explanation }) => {
    return (
        <div
            className="w-full max-w-4xl mt-6 p-6 rounded-2xl
            bg-white/10 backdrop-blur-xl
            shadow-[0_0_30px_rgba(0,0,0,0.25)] border border-white/10
            text-white">
            <h2
                className="text-2xl font-bold mb-4 
                bg-linear-to-r from-blue-400 to-purple-500 
                bg-clip-text text-transparent">
                Explanation
            </h2>

            <div className="leading-relaxed text-gray-200 whitespace-pre-wrap">
                <Markdown remarkPlugins={[remarkGfm]}>{explanation}</Markdown>
            </div>
        </div>
    );
};

export default CodeExplanation;
