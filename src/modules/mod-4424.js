'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4424",
  name: "Replace \"6\" with \"j\"",
  description: "Replaces every 6 with j.",
  run: (value) => String(value).split("6").join("j"),
});
