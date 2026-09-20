'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1469",
  name: "Replace \"j\" with \"S\"",
  description: "Replaces every j with S.",
  run: (value) => String(value).split("j").join("S"),
});
