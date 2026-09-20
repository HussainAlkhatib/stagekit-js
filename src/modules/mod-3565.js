'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3565",
  name: "Replace \"S\" with \"e\"",
  description: "Replaces every S with e.",
  run: (value) => String(value).split("S").join("e"),
});
