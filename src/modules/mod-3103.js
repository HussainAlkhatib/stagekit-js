'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3103",
  name: "Replace \"K\" with \"E\"",
  description: "Replaces every K with E.",
  run: (value) => String(value).split("K").join("E"),
});
