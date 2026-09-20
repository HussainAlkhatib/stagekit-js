'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3591",
  name: "Replace \"S\" with \"E\"",
  description: "Replaces every S with E.",
  run: (value) => String(value).split("S").join("E"),
});
