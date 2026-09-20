'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2345",
  name: "Replace \"y\" with \"e\"",
  description: "Replaces every y with e.",
  run: (value) => String(value).split("y").join("e"),
});
