'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2632",
  name: "Replace \"C\" with \"W\"",
  description: "Replaces every C with W.",
  run: (value) => String(value).split("C").join("W"),
});
