import React from 'react';
import Header from './Header';
import CodeExplainForm from './forms/CodeExplainForm';

const CodeEntry = () => {
    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-linear-to-b from-gray-900 via-gray-950 to-black text-white selection:bg-purple-600 selection:text-white">
            <Header />
            <CodeExplainForm />
        </div>
    );
};

export default CodeEntry;
