'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0774",
  name: "Replace \"c\" with \"Q\"",
  description: "Replaces every c with Q.",
  run: (value) => String(value).split("c").join("Q"),
});
