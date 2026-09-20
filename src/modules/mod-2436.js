'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2436",
  name: "Replace \"z\" with \"J\"",
  description: "Replaces every z with J.",
  run: (value) => String(value).split("z").join("J"),
});
