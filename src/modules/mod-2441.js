'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2441",
  name: "Replace \"z\" with \"O\"",
  description: "Replaces every z with O.",
  run: (value) => String(value).split("z").join("O"),
});
