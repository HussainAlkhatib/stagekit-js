'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2431",
  name: "Replace \"z\" with \"E\"",
  description: "Replaces every z with E.",
  run: (value) => String(value).split("z").join("E"),
});
