'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2143",
  name: "Replace \"u\" with \"V\"",
  description: "Replaces every u with V.",
  run: (value) => String(value).split("u").join("V"),
});
