'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0693",
  name: "Replace \"c\" with \"p\"",
  description: "Replaces every c with p.",
  run: (value) => String(value).split("c").join("p"),
});
