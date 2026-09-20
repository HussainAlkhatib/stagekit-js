'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2126",
  name: "Replace \"u\" with \"E\"",
  description: "Replaces every u with E.",
  run: (value) => String(value).split("u").join("E"),
});
