'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1450",
  name: "Replace \"j\" with \"z\"",
  description: "Replaces every j with z.",
  run: (value) => String(value).split("j").join("z"),
});
