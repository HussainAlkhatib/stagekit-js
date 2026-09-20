'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1943",
  name: "Replace \"r\" with \"E\"",
  description: "Replaces every r with E.",
  run: (value) => String(value).split("r").join("E"),
});
