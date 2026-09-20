'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3823",
  name: "Replace \"W\" with \"s\"",
  description: "Replaces every W with s.",
  run: (value) => String(value).split("W").join("s"),
});
