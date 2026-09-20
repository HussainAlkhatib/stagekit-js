'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1236",
  name: "Replace \"f\" with \"3\"",
  description: "Replaces every f with 3.",
  run: (value) => String(value).split("f").join("3"),
});
