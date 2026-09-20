'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2052",
  name: "Replace \"t\" with \"q\"",
  description: "Replaces every t with q.",
  run: (value) => String(value).split("t").join("q"),
});
