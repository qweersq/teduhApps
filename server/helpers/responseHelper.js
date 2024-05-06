// responseHelper.js
const successResponse = (data, message = 'Request successful') => {
    return {
      success: true,
      statusCode: 200,
      message: message,
      data: data,
    };
  };
  
  const errorResponse = (message = 'Internal Server Error', statusCode = 500) => {
    return {
      success: false,
      statusCode: statusCode,
      error: {
        message: message,
      },
    };
  };
  
  module.exports = {
    successResponse,
    errorResponse,
  };
  