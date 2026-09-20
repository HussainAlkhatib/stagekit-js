'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2876",
  name: "Replace \"G\" with \"W\"",
  description: "Replaces every G with W.",
  run: (value) => String(value).split("G").join("W"),
});
