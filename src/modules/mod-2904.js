'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2904",
  name: "Replace \"H\" with \"o\"",
  description: "Replaces every H with o.",
  run: (value) => String(value).split("H").join("o"),
});
