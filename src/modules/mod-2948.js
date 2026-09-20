'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2948",
  name: "Replace \"H\" with \"7\"",
  description: "Replaces every H with 7.",
  run: (value) => String(value).split("H").join("7"),
});
