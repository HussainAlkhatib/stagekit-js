'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2065",
  name: "Replace \"t\" with \"E\"",
  description: "Replaces every t with E.",
  run: (value) => String(value).split("t").join("E"),
});
