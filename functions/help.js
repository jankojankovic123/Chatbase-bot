const fetch = require('node-fetch');

exports.handler = async (event) => {
  const path = event.path.replace(/^\/help/, '') || '/';
  const url = `https://chatbase.co/J9jzeWbLBTD_BrL26uPn-/help${path}`;

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
