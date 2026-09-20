'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3464",
  name: "Replace \"Q\" with \"z\"",
  description: "Replaces every Q with z.",
  run: (value) => String(value).split("Q").join("z"),
});
