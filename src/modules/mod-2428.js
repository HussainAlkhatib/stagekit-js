'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2428",
  name: "Replace \"z\" with \"B\"",
  description: "Replaces every z with B.",
  run: (value) => String(value).split("z").join("B"),
});
