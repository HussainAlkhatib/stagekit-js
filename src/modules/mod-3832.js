'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3832",
  name: "Replace \"W\" with \"B\"",
  description: "Replaces every W with B.",
  run: (value) => String(value).split("W").join("B"),
});
