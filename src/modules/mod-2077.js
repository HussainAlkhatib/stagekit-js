'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2077",
  name: "Replace \"t\" with \"Q\"",
  description: "Replaces every t with Q.",
  run: (value) => String(value).split("t").join("Q"),
});
