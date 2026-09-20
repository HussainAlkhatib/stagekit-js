'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1866",
  name: "Replace \"q\" with \"n\"",
  description: "Replaces every q with n.",
  run: (value) => String(value).split("q").join("n"),
});
