'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2424",
  name: "Replace \"z\" with \"w\"",
  description: "Replaces every z with w.",
  run: (value) => String(value).split("z").join("w"),
});
