'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3452",
  name: "Replace \"Q\" with \"n\"",
  description: "Replaces every Q with n.",
  run: (value) => String(value).split("Q").join("n"),
});
