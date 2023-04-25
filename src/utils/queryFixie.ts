import fetch from 'isomorphic-fetch';

export const callAPI = async (query: string): Promise<any> => {
  console.log("TEST")
  const url = 'http://localhost:5000/api/agents/silaslenihan/example-agent';

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: { text: query } }),
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error calling API:', error);
    throw error;
  }
};
