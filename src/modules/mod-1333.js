'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1333",
  name: "Replace \"h\" with \"E\"",
  description: "Replaces every h with E.",
  run: (value) => String(value).split("h").join("E"),
});
