'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1440",
  name: "Replace \"j\" with \"p\"",
  description: "Replaces every j with p.",
  run: (value) => String(value).split("j").join("p"),
});
