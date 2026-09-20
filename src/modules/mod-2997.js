'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2997",
  name: "Replace \"I\" with \"V\"",
  description: "Replaces every I with V.",
  run: (value) => String(value).split("I").join("V"),
});
