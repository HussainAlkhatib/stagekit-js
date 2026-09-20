'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3748",
  name: "Replace \"V\" with \"e\"",
  description: "Replaces every V with e.",
  run: (value) => String(value).split("V").join("e"),
});
