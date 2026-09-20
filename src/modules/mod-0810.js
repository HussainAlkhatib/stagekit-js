'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0810",
  name: "Replace \"c\" with \"2\"",
  description: "Replaces every c with 2.",
  run: (value) => String(value).split("c").join("2"),
});
