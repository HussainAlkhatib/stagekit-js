'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0720",
  name: "Replace \"c\" with \"y\"",
  description: "Replaces every c with y.",
  run: (value) => String(value).split("c").join("y"),
});
