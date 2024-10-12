const express = require("express");
const axios = require("axios");

const router = express.Router();

const PistonAPIUrl = "https://emkc.org/api/v2/piston/execute"; // Piston API URL

// Language mappings to Piston languages
const languageMap = {
    c: "c",
    cpp: "cpp",
    java: "java",
    python: "python3",
    ruby: "ruby",
    go: "go",
    php: "php",
    javascript: "javascript",
};

router.post("/compile", async (req, res) => {
    const { language, code } = req.body;

    const languageConfig = languageMap[language];
    if (!languageConfig) {
        return res.status(400).json({ error: "Unsupported language" });
    }

    try {
        // Prepare request payload for Piston API
        const requestData = {
            language: languageConfig,
            version: "*", // Use latest version
            files: [{ content: code }],
        };

        // Make a request to Piston API
        const response = await axios.post(PistonAPIUrl, requestData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Send back the result
        res.json({ output: response.data.run.stdout || response.data.run.stderr });
    } catch (error) {
        res.status(500).json({ error: "Code execution error", details: error.message });
    }
});

module.exports = router;
