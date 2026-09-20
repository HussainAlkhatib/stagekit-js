'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3713",
  name: "Replace \"U\" with \"E\"",
  description: "Replaces every U with E.",
  run: (value) => String(value).split("U").join("E"),
});
