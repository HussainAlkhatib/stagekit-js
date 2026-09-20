'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1331",
  name: "Replace \"h\" with \"C\"",
  description: "Replaces every h with C.",
  run: (value) => String(value).split("h").join("C"),
});
