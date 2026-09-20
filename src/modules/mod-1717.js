'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1717",
  name: "Replace \"n\" with \"W\"",
  description: "Replaces every n with W.",
  run: (value) => String(value).split("n").join("W"),
});
