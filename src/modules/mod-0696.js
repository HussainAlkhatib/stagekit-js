'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0696",
  name: "Replace \"c\" with \"q\"",
  description: "Replaces every c with q.",
  run: (value) => String(value).split("c").join("q"),
});
