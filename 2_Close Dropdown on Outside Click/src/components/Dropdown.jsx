import React, { useState, useRef, useEffect } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);         
    const dropdownRef = useRef(null);                    

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    // ✅ Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Options
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/10">
                    <ul className="py-1 text-sm text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account settings</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Support</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">License</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign out</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
