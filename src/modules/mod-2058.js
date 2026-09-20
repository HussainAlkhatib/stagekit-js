'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2058",
  name: "Replace \"t\" with \"x\"",
  description: "Replaces every t with x.",
  run: (value) => String(value).split("t").join("x"),
});
