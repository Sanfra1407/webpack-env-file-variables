// `process.env` is the one defined in the webpack's DefinePlugin
const envVariables = process.env;

// Read vars from envVariables object
const {
  APP_TITLE,
  APP_BASE_URL,
  APP_API_USER,
  APP_ENV,
  APP_TIMEZONE
} = envVariables;

/**
 * @const _getRowString
 * @description Concatenate `description` and `envVar` for creating a row text.
 * @param description 
 * @param envVar 
 * 
 * @returns {string}
 */
const _getRowString = (description, envVar) => { 
  return `<p>${description}: <strong>${envVar}</strong></p>`;
}

// Append rows to `.env-vars` class
document.querySelector('.env-vars').innerHTML = `
  ${_getRowString('App title', APP_TITLE)}
  ${_getRowString('Current environment', APP_ENV)}
  ${_getRowString('API user', APP_API_USER)}
  ${_getRowString('Base URL', APP_BASE_URL)}
  ${_getRowString('Timezone', APP_TIMEZONE)}
`;

// Expose envVariables to the window object
window.envVariables = envVariables;