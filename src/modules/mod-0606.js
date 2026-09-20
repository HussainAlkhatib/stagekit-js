'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0606",
  name: "Replace \"b\" with \"V\"",
  description: "Replaces every b with V.",
  run: (value) => String(value).split("b").join("V"),
});
