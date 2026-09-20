'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0807",
  name: "Replace \"c\" with \"1\"",
  description: "Replaces every c with 1.",
  run: (value) => String(value).split("c").join("1"),
});
