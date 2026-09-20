'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0756",
  name: "Replace \"c\" with \"K\"",
  description: "Replaces every c with K.",
  run: (value) => String(value).split("c").join("K"),
});
