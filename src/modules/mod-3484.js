'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3484",
  name: "Replace \"Q\" with \"U\"",
  description: "Replaces every Q with U.",
  run: (value) => String(value).split("Q").join("U"),
});
