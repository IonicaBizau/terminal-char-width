"use strict";

const isWindows = require("is-windows");

// TODO This probably needs to be improved by checking the
// terminal type and fonts. But it's good enough for an
// initial version. :D
module.exports = isWindows() ? 0.714 : 0.5;
