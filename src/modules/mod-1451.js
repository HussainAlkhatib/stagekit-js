'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1451",
  name: "Replace \"j\" with \"A\"",
  description: "Replaces every j with A.",
  run: (value) => String(value).split("j").join("A"),
});
