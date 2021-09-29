/**
 * @param {string}  baseUrl
 * @description this method wrap native fetch with extra options
 */
const wraperFetch = (options) => {
  return async (init, input) => {
    let _init = init;
    let _input = input;
    if (typeof _init == "string" && options.baseUrl) {
      _init = options.baseUrl + init;
    }
    if (!init && options.baseUrl) {
      _init = options.baseUrl;
    }
    if (input) {
      _input = {
        headers: {
          "Content-type": "application/json",
          ...input.headers,
        },
        body: input?.body && JSON.stringify(input.body),
      };
    }
    try {
      const data = await fetch(_init, input);
      return data.json();
    } catch (error) {
      throw error;
    }
  };
};

export { wraperFetch };
