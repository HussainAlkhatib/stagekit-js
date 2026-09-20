'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3148",
  name: "Replace \"L\" with \"o\"",
  description: "Replaces every L with o.",
  run: (value) => String(value).split("L").join("o"),
});
