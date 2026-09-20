'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3608",
  name: "Replace \"S\" with \"W\"",
  description: "Replaces every S with W.",
  run: (value) => String(value).split("S").join("W"),
});
