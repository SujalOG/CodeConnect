/* eslint-disable react/prop-types */
import { FaCode, FaPlay } from "react-icons/fa";
import { MdSyncDisabled, MdOutlineSync, MdMessage } from "react-icons/md";
import { useContext, useState } from 'react'
import { WorkspaceContext } from "../../context/WorkspaceProvider";
import axios from "axios";  // Import axios for API calls



const WorksapceHeader = ({
    setEditorTheme,
    handleFileLanguageChange,
    isChatSelected, 
    toggleIsChatSelected,
    saveProject, 
    getAllProjects,
}) => {
    const {
        token,
        setUserSavedProjects,
        currentSelectedFile,
        files,
        isFilesSyncing, 
        setIsFilesSyncing,
    } = useContext(WorkspaceContext);

    const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');

    // Editor dynamic properties -------------------------------------
    const languagesAvailable = [
        'javaScript', 'typeScript',
        'cpp', 'java',
        'python', 'php',
        'html', 'css',
    ];

    const editorThemes = [
        'vs-dark', 'light'
    ];

    // Language ID mapping
    const languageMap = {
        'javaScript': 63,
        'typeScript': 69,
        'cpp': 54,
        'java': 62,
        'python': 71,
        'php': 74,
        'html': 83,
        'css': 82,
    };

    // Toggle syncing of files --------------------------------------
    const toggleIsFilesSyncing = async () => {
        if (!isFilesSyncing) {
            const userProceed = confirm("Do you want to save current work as a project?");
            let projectName;
            if (userProceed) {
                projectName = prompt("Name of this save: ");
                while (!projectName) {
                    projectName = prompt("Name of this save: ");
                }
                await saveProject(token, projectName, files);
            }
        } else {
            const allProjects = await getAllProjects(token);
            setUserSavedProjects(allProjects);
        }
        setIsFilesSyncing(prevIsFilesSyncing => !prevIsFilesSyncing);
    };

    // Language change handler --------------------------------------
    const handleLanguageChange = (e) => {
        handleFileLanguageChange(e.target.value);
    };

    // Run code function --------------------------------------------
    const handleCompile = async () => {
        try {
            const response = await fetch('http://localhost:4500/api/compiler/compile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ language, code: currentSelectedFile.fileContent }),
            });

            const result = await response.json();
            setOutput(result.output || result.error);
        } catch (error) {
            setOutput('Compilation error. Please try again.');
        }
    };

    // Component to render the workspace page header ----------------
    const WorksapcePageHeader = () => (
        <>
            <h1 className="h-5/6">
                {currentSelectedFile.filename}
            </h1>
            <div className="flex items-center">

                {/* Language Selector */}
               

                {/* Theme Selector */}
                <select className="select select-bordered capitalize w-full max-w-xs ml-2"
                    onChange={e => setEditorTheme(e.target.value)}
                >
                    {editorThemes.map((eachTheme) => (
                        <option key={eachTheme}
                            value={eachTheme}>
                            {eachTheme}
                        </option>
                    ))}
                </select>

                {/* Run Button */}
                

                {/* Sync Toggle Button */}
                <button className="btn tooltip tooltip-bottom w-14 mx-1 text-lg flex justify-center z-40"
                    data-tip={isFilesSyncing ? "Turn off sync" : "Turn on sync"}
                    onClick={toggleIsFilesSyncing}
                >
                    {isFilesSyncing ? (
                        <MdOutlineSync />
                    ) : (
                        <MdSyncDisabled />
                    )}
                </button>

                {/* Toggle Chat View */}
                <button className="btn tooltip tooltip-bottom w-14 mx-1 flex justify-center z-40"
                    data-tip={isChatSelected ? "Back to Code" : "See Chats"}
                    onClick={toggleIsChatSelected}
                >
                    {isChatSelected ? (
                        <FaCode />
                    ) : (
                        <MdMessage className="text-lg" />
                    )}
                </button>
            </div>
        </>
    );

    // Main return JSX ----------------------------------------------
    return (
        <div className={`navbar bg-slate-600 flex justify-between max-h-[15%]`}>
            {WorksapcePageHeader()}
        </div>
    );
};

export default WorksapceHeader;
