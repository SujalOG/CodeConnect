const Compiler = ({ isVisible, output }) => {
    if (!isVisible) return null; // Don't render if not visible

    return (
        <div className="fixed bottom-0 left-0 w-[85%] h-[30%] bg-gray-800 text-white p-4 shadow-lg border-t-4 border-blue-500 overflow-y-auto z-50 ml-[16%]">
            <h2 className="text-xl font-semibold mb-2">Output:</h2>
            <pre className="whitespace-pre-wrap bg-gray-900 p-4 rounded-md border border-gray-700 mt-2">
                {output || "No output yet."}
            </pre>
        </div>
    );
};

export default Compiler;
