'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1940",
  name: "Replace \"r\" with \"B\"",
  description: "Replaces every r with B.",
  run: (value) => String(value).split("r").join("B"),
});
