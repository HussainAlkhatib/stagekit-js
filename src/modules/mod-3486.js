'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3486",
  name: "Replace \"Q\" with \"W\"",
  description: "Replaces every Q with W.",
  run: (value) => String(value).split("Q").join("W"),
});
