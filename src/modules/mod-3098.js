'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3098",
  name: "Replace \"K\" with \"z\"",
  description: "Replaces every K with z.",
  run: (value) => String(value).split("K").join("z"),
});
