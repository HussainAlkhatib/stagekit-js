'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4415",
  name: "Replace \"6\" with \"a\"",
  description: "Replaces every 6 with a.",
  run: (value) => String(value).split("6").join("a"),
});
