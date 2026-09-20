'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2721",
  name: "Replace \"E\" with \"o\"",
  description: "Replaces every E with o.",
  run: (value) => String(value).split("E").join("o"),
});
