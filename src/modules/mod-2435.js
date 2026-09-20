'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2435",
  name: "Replace \"z\" with \"I\"",
  description: "Replaces every z with I.",
  run: (value) => String(value).split("z").join("I"),
});
