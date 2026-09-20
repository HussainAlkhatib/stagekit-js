'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1430",
  name: "Replace \"j\" with \"e\"",
  description: "Replaces every j with e.",
  run: (value) => String(value).split("j").join("e"),
});
