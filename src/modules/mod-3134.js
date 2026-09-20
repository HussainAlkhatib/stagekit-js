'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3134",
  name: "Replace \"L\" with \"a\"",
  description: "Replaces every L with a.",
  run: (value) => String(value).split("L").join("a"),
});
