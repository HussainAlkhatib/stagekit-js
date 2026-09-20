'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1467",
  name: "Replace \"j\" with \"Q\"",
  description: "Replaces every j with Q.",
  run: (value) => String(value).split("j").join("Q"),
});
