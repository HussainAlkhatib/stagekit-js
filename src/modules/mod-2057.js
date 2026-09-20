'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2057",
  name: "Replace \"t\" with \"w\"",
  description: "Replaces every t with w.",
  run: (value) => String(value).split("t").join("w"),
});
