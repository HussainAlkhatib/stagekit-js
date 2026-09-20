'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2416",
  name: "Replace \"z\" with \"o\"",
  description: "Replaces every z with o.",
  run: (value) => String(value).split("z").join("o"),
});
