'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2138",
  name: "Replace \"u\" with \"Q\"",
  description: "Replaces every u with Q.",
  run: (value) => String(value).split("u").join("Q"),
});
