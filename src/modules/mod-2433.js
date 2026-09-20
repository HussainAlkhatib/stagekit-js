'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2433",
  name: "Replace \"z\" with \"G\"",
  description: "Replaces every z with G.",
  run: (value) => String(value).split("z").join("G"),
});
