'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2125",
  name: "Replace \"u\" with \"D\"",
  description: "Replaces every u with D.",
  run: (value) => String(value).split("u").join("D"),
});
