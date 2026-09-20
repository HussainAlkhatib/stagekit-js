'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2434",
  name: "Replace \"z\" with \"H\"",
  description: "Replaces every z with H.",
  run: (value) => String(value).split("z").join("H"),
});
