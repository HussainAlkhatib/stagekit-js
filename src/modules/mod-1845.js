'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1845",
  name: "Replace \"p\" with \"2\"",
  description: "Replaces every p with 2.",
  run: (value) => String(value).split("p").join("2"),
});
