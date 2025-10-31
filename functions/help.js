const fetch = require('node-fetch');

exports.handler = async (event) => {
  // For root path, use '/help', otherwise use the full path
  const path = event.path === '/' ? '/help' : event.path;
  const url = `https://chatbase.co/J9jzeWbLBTD_BrL26uPn-${path}`;

  try {
    const response = await fetch(url);
    const body = await response.text();

    return {
      statusCode: response.status,
      body: body,
      headers: {
        'Content-Type': response.headers.get('content-type') || 'text/html',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Error fetching help page',
    };
  }
};
