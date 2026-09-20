'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3490",
  name: "Replace \"Q\" with \"0\"",
  description: "Replaces every Q with 0.",
  run: (value) => String(value).split("Q").join("0"),
});
