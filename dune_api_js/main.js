import { Headers } from 'node-fetch';
import fetch from 'node-fetch';

// Add the API key to an header object
const meta = {
    "x-dune-api-key": "UfwtCgP59CHm1mKkEd7TJVMl1m20e4gN"
};
const header = new Headers(meta);

const apiBaseUrl = "https://api.dune.com/v1"; // Base URL for the API

const queryId = 1532463;

//  Call the Dune API
const executionIdResponse = await fetch(apiBaseUrl + `/query/${queryId}/execute`, {
    method: 'POST',
    headers: header
});

const executionResponse = await executionIdResponse.text();

const executionId = executionResponse.execution_id;

if (executionId) {
    const result = await fetch(apiBaseUrl + `/execution/${executionId}/result`, {
        method: 'GET',
        headers: header
    });
    console.log('result', await result.text());
} console.log('execution id does not exist');
