'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3439",
  name: "Replace \"Q\" with \"a\"",
  description: "Replaces every Q with a.",
  run: (value) => String(value).split("Q").join("a"),
});
