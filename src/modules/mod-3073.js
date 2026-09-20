'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3073",
  name: "Replace \"K\" with \"a\"",
  description: "Replaces every K with a.",
  run: (value) => String(value).split("K").join("a"),
});
