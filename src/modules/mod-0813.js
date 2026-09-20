'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0813",
  name: "Replace \"c\" with \"3\"",
  description: "Replaces every c with 3.",
  run: (value) => String(value).split("c").join("3"),
});
