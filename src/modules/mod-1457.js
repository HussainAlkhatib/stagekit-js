'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1457",
  name: "Replace \"j\" with \"G\"",
  description: "Replaces every j with G.",
  run: (value) => String(value).split("j").join("G"),
});
