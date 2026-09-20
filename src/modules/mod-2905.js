'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2905",
  name: "Replace \"H\" with \"p\"",
  description: "Replaces every H with p.",
  run: (value) => String(value).split("H").join("p"),
});
