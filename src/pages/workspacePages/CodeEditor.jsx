/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import SOCKET_ACTIONS from '../../utils/socketConn/SocketActions';
import { WorkspaceContext } from '../../context/WorkspaceProvider';

const CodeEditor = ({
    socketRef, setFiles, editorTheme,
    handleCurrentSelectedFileRefChange, handleFileChange
}) => {
    const {
        currentSelectedFile, currentSelectedFileIndexRef, isFilesSyncing
    } = useContext(WorkspaceContext);

    // State for compiler output and selected language
    const [output, setOutput] = useState('');
    const [language, setLanguage] = useState('javascript'); // Default to JavaScript

    useEffect(() => {
        if (socketRef.current && isFilesSyncing) {
            socketRef.current.on(SOCKET_ACTIONS.CODE_CHANGE, ({ files, fileId }) => {
                setFiles(files);
                if (currentSelectedFileIndexRef.current === fileId) {
                    handleCurrentSelectedFileRefChange(files[currentSelectedFileIndexRef.current - 1]);
                }
            });
        } else {
            console.log('Socket code-sync error!');
        }

        return () => {
            if (socketRef.current) {
                socketRef.current.off(SOCKET_ACTIONS.CODE_CHANGE);
            }
        };
    }, [socketRef.current, setFiles, isFilesSyncing]);

    // Function to handle compiling the code
    const handleCompile = async () => {
        try {
            const response = await fetch('http://localhost:4500/api/compiler/compile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    language, // Selected language from the dropdown
                    code: currentSelectedFile.fileContent, // Current file content as code
                }),
            });

            const result = await response.json();
            setOutput(result.output || result.error || 'Unknown error occurred.');
        } catch (error) {
            setOutput('Compilation error. Please try again.');
        }
    };

    return (
        <div className='flex flex-col h-full'>
            <div className='flex justify-between items-center p-2 bg-gray-800'>
                {/* Language selection dropdown */}
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-gray-700 text-white px-4 py-2 rounded-md"
                >
                    <option value="javascript">JavaScript</option>
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="ruby">Ruby</option>
                    <option value="go">Go</option>
                    <option value="php">PHP</option>
                </select>

                {/* Compile button */}
                <button
                    onClick={handleCompile}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Compile Code
                </button>
            </div>

            {/* Code editor */}
            <Editor
                className='bg pt-2'
                width="100%"
                height="50vh"
                theme={editorTheme}
                language={language} // Use the selected language for the editor
                value={currentSelectedFile.fileContent}
                onChange={handleFileChange}
            />

            {/* Output panel */}
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mt-4 h-48 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-2 border-b border-gray-600 pb-2">Compiler Output:</h2>
                <pre className="whitespace-pre-wrap text-sm font-mono leading-relaxed text-green-400">
                    {output}
                </pre>
            </div>
        </div>
    );
};

export default CodeEditor;
