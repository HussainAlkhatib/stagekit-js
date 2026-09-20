'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2870",
  name: "Replace \"G\" with \"Q\"",
  description: "Replaces every G with Q.",
  run: (value) => String(value).split("G").join("Q"),
});
