'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2460",
  name: "Replace \"z\" with \"7\"",
  description: "Replaces every z with 7.",
  run: (value) => String(value).split("z").join("7"),
});
