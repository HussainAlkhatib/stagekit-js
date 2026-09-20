'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4057",
  name: "Replace \"0\" with \"i\"",
  description: "Replaces every 0 with i.",
  run: (value) => String(value).split("0").join("i"),
});
