const express = require("express");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.post("/compile", (req, res) => {
    const { language, code } = req.body;
    let fileName, compileCommand, executeCommand;

    // Generate unique file names
    const filePath = path.resolve(__dirname, `temp.${language}`);

    // Save code to a file
    fs.writeFileSync(filePath, code);

    // Set up commands based on language
    switch (language) {
        case "c":
            fileName = "temp.c"; // C file
            compileCommand = `gcc ${filePath} -o temp.exe`; // Compile to temp.exe
            executeCommand = `temp.exe`; // Execute the binary directly on Windows
            break;

        case "cpp":
            fileName = "temp.cpp"; // C++ file
            compileCommand = `g++ ${filePath} -o temp.exe -mconsole`; // Compile to temp.exe as console application
            executeCommand = `temp.exe`; // Execute the binary directly on Windows
            break;

        case "java":
            fileName = "temp.java"; // Java file
            const className = "temp"; // Class name should match the file name
            compileCommand = `javac ${filePath}`; // Compile Java file
            executeCommand = `java -cp ${path.dirname(filePath)} ${className}`; // Run the compiled class with correct classpath
            break;

        case "python":
            fileName = "temp.py";
            compileCommand = ""; // No compilation needed for Python
            executeCommand = `python ${filePath}`; // Execute Python script
            break;

        case "ruby":
            fileName = "temp.rb";
            compileCommand = ""; // No compilation needed for Ruby
            executeCommand = `ruby ${filePath}`; // Execute Ruby script
            break;

        case "go":
            fileName = "temp.go";
            compileCommand = `go build -o temp ${filePath}`; // Build Go binary
            executeCommand = `./temp`; // Execute the binary on Unix systems
            break;

        case "php":
            fileName = "temp.php";
            compileCommand = ""; // No compilation needed for PHP
            executeCommand = `php ${filePath}`; // Execute PHP script
            break;

        default:
            return res.status(400).json({ error: "Unsupported language" });
    }

    // Compile the code if a compile command is provided
    if (compileCommand) {
        exec(compileCommand, (err) => {
            if (err) {
                cleanUpFiles(filePath, "temp.exe", language); // Clean up on error
                return res.status(500).json({ error: err.message || 'Compilation Error' });
            }

            // Execute the compiled code
            exec(executeCommand, (err, stdout, stderr) => {
                cleanUpFiles(filePath, "temp.exe", language); // Clean up after execution
                if (err) return res.status(500).json({ error: stderr || 'Execution Error' });
                res.json({ output: stdout });
            });
        });
    } else {
        // Execute code that doesn't require compilation
        exec(executeCommand, (err, stdout, stderr) => {
            cleanUpFiles(filePath, null, language); // Clean up after execution
            if (err) return res.status(500).json({ error: stderr || 'Execution Error' });
            res.json({ output: stdout });
        });
    }
});

// Cleanup function to remove temporary files
function cleanUpFiles(filePath, outputFileName, language) {
    try {
        fs.unlinkSync(filePath); // Remove the source file
        if (outputFileName && fs.existsSync(outputFileName)) {
            fs.unlinkSync(outputFileName); // Remove the compiled output file
        }
        if (language === "go" && fs.existsSync("temp")) {
            fs.unlinkSync("temp"); // Remove the binary for Go
        }
    } catch (cleanupErr) {
        console.error("Cleanup error:", cleanupErr);
    }
}

module.exports = router;
