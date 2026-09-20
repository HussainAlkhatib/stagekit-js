'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2050",
  name: "Replace \"t\" with \"o\"",
  description: "Replaces every t with o.",
  run: (value) => String(value).split("t").join("o"),
});
