'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1448",
  name: "Replace \"j\" with \"x\"",
  description: "Replaces every j with x.",
  run: (value) => String(value).split("j").join("x"),
});
