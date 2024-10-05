import axios from 'axios';

export const executeCode = async (language, code, input = '') => {
    const payload = {
        language_id: language, // Make sure this matches the Judge0 language ID
        source_code: code,
        stdin: input, // This is optional, only needed if your code requires input
    };

    try {
        // Submit the code
        const submissionResponse = await axios.post('https://api.judge0.com/submissions', payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const submissionId = submissionResponse.data.token; // Get the submission ID

        // Now, retrieve the result using the submission ID
        let resultResponse;
        do {
            // Wait for a bit before polling for results
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
            resultResponse = await axios.get(`https://api.judge0.com/submissions/${submissionId}`);
        } while (resultResponse.data.status.id < 3); // Poll until status is 'Completed' or 'Error'

        return resultResponse.data; // Return the final result

    } catch (error) {
        throw new Error('Error executing the code: ' + error.message);
    }
};
