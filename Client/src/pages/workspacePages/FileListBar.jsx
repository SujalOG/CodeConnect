/* eslint-disable react/prop-types */
import { FaFile } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineMoreVert } from "react-icons/md";
import { useState } from "react";

const FileListBar = ({
    file, handleCurrentSelectedFileRefChange, handleDeleteFile,
    currentSelectedFileIndexRef
}) => {
    const [showOptions, setShowOptions] = useState(false);

    const handleSelectFile = () => {
        currentSelectedFileIndexRef.current = file.fileId;
        handleCurrentSelectedFileRefChange(file);
    }

    return (
        <li 
            className={`flex items-center justify-between px-3 py-2 my-2 bg-gray-800 rounded-lg text-white 
            ${currentSelectedFileIndexRef.current === file.fileId ? "bg-blue-500" : ""} 
            hover:bg-gray-700 cursor-pointer`}
            onClick={handleSelectFile}
        >
            {/* File Icon */}
            <div className="flex items-center gap-2">
                <FaFile className="text-xl" />
                <span className="truncate">{file.filename}</span>
            </div>

            {/* More Options */}
            <div className="relative">
                <button
                    className="hover:bg-gray-600 rounded p-1"
                    onClick={() => setShowOptions(!showOptions)}
                >
                    <MdOutlineMoreVert />
                </button>
                {showOptions && (
                    <div className="absolute right-0 mt-2 w-32 bg-gray-900 rounded-lg shadow-lg text-sm">
                        <button 
                            className="w-full px-3 py-2 text-left hover:bg-red-600" 
                            onClick={e => handleDeleteFile(e, file.fileId)}
                        >
                            <MdOutlineDelete className="inline-block mr-2" /> Delete
                        </button>
                        {/* Add more options like Rename, etc. */}
                    </div>
                )}
            </div>
        </li>
    )
}

export default FileListBar;
