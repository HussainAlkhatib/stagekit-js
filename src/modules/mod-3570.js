'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3570",
  name: "Replace \"S\" with \"j\"",
  description: "Replaces every S with j.",
  run: (value) => String(value).split("S").join("j"),
});
