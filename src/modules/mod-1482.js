'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1482",
  name: "Replace \"j\" with \"5\"",
  description: "Replaces every j with 5.",
  run: (value) => String(value).split("j").join("5"),
});
