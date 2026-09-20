'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1449",
  name: "Replace \"j\" with \"y\"",
  description: "Replaces every j with y.",
  run: (value) => String(value).split("j").join("y"),
});
