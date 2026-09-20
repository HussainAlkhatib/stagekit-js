'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1480",
  name: "Replace \"j\" with \"3\"",
  description: "Replaces every j with 3.",
  run: (value) => String(value).split("j").join("3"),
});
