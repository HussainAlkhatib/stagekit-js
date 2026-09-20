'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4018",
  name: "Replace \"Z\" with \"E\"",
  description: "Replaces every Z with E.",
  run: (value) => String(value).split("Z").join("E"),
});
