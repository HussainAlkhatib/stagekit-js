'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1434",
  name: "Replace \"j\" with \"i\"",
  description: "Replaces every j with i.",
  run: (value) => String(value).split("j").join("i"),
});
