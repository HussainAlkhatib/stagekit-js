'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3816",
  name: "Replace \"W\" with \"l\"",
  description: "Replaces every W with l.",
  run: (value) => String(value).split("W").join("l"),
});
