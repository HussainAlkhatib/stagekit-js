'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2054",
  name: "Replace \"t\" with \"s\"",
  description: "Replaces every t with s.",
  run: (value) => String(value).split("t").join("s"),
});
