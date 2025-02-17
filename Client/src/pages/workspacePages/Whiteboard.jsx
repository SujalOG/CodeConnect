import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Whiteboard = ({ onClose }) => {
  const [ExcalidrawComp, setExcalidrawComp] = useState(null);

  useEffect(() => {
    // Add process polyfill
    if (typeof window !== "undefined" && !window.process) {
      window.process = {
        env: {
          NODE_ENV: process.env.NODE_ENV || "development",
        },
      };
    }

    import("@excalidraw/excalidraw").then((mod) => {
      setExcalidrawComp(() => mod.Excalidraw);
    });
  }, []);

  return (
    <div className="whiteboard-container">
      <div className="whiteboard-header">
        <button onClick={onClose} className="back-button">
          <FaArrowLeft /> Back to Code
        </button>
      </div>
      <div className="whiteboard-content">
        {ExcalidrawComp ? (
          <ExcalidrawComp
            initialData={{
              appState: {
                viewBackgroundColor: "#121212",
                theme: "dark",
                currentItemFontFamily: 1,
              },
            }}
            theme="dark"
            width="100%"
            height="100%"
            UIOptions={{
              canvasActions: {
                loadScene: false,
                export: false,
                saveAsImage: true,
              },
            }}
          />
        ) : (
          <div className="loading-message">Loading Whiteboard...</div>
        )}
      </div>
      <style>{`
        .whiteboard-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #121212;
          z-index: 9999;
          display: flex;
          flex-direction: column;
        }
        .whiteboard-header {
          padding: 8px;
          background: #2c2c2c;
        }
        .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background-color: #4a4a4a;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .back-button:hover {
          background-color: #5a5a5a;
        }
        .whiteboard-content {
          flex: 1;
          height: calc(100vh - 52px);
          width: 100%;
        }
        .loading-message {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default Whiteboard;
