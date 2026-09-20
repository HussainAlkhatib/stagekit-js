'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0230",
  name: "Pad start to 6 with \"_\"",
  description: "Left-pads the value to width 6 with \"_\".",
  run: (value) => String(value).padStart(6, "_"),
});
