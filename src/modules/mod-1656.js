'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1656",
  name: "Replace \"m\" with \"W\"",
  description: "Replaces every m with W.",
  run: (value) => String(value).split("m").join("W"),
});
