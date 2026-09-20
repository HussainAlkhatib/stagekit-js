'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1914",
  name: "Replace \"r\" with \"a\"",
  description: "Replaces every r with a.",
  run: (value) => String(value).split("r").join("a"),
});
