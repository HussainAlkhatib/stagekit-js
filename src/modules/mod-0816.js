'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0816",
  name: "Replace \"c\" with \"4\"",
  description: "Replaces every c with 4.",
  run: (value) => String(value).split("c").join("4"),
});
