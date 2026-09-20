'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2248",
  name: "Replace \"w\" with \"E\"",
  description: "Replaces every w with E.",
  run: (value) => String(value).split("w").join("E"),
});
