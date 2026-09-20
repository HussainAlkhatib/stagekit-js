'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2124",
  name: "Replace \"u\" with \"C\"",
  description: "Replaces every u with C.",
  run: (value) => String(value).split("u").join("C"),
});
