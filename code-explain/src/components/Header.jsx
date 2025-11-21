import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center w-full max-w-4xl py-6">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm animate-pulse">
          CodeExplain
        </h1>
        </header>
    );
};

export default Header;
