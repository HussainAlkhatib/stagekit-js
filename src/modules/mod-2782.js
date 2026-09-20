'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2782",
  name: "Replace \"F\" with \"o\"",
  description: "Replaces every F with o.",
  run: (value) => String(value).split("F").join("o"),
});
