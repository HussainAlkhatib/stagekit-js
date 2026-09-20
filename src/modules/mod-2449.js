'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2449",
  name: "Replace \"z\" with \"W\"",
  description: "Replaces every z with W.",
  run: (value) => String(value).split("z").join("W"),
});
