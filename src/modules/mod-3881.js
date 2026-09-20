'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3881",
  name: "Replace \"X\" with \"p\"",
  description: "Replaces every X with p.",
  run: (value) => String(value).split("X").join("p"),
});
