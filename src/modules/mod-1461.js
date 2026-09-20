'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1461",
  name: "Replace \"j\" with \"K\"",
  description: "Replaces every j with K.",
  run: (value) => String(value).split("j").join("K"),
});
