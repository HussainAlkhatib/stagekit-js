'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2083",
  name: "Replace \"t\" with \"W\"",
  description: "Replaces every t with W.",
  run: (value) => String(value).split("t").join("W"),
});
