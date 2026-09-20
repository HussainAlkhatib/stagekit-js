'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1473",
  name: "Replace \"j\" with \"W\"",
  description: "Replaces every j with W.",
  run: (value) => String(value).split("j").join("W"),
});
