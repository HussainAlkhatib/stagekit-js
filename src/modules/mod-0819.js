'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0819",
  name: "Replace \"c\" with \"5\"",
  description: "Replaces every c with 5.",
  run: (value) => String(value).split("c").join("5"),
});
