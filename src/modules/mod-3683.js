'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3683",
  name: "Replace \"U\" with \"a\"",
  description: "Replaces every U with a.",
  run: (value) => String(value).split("U").join("a"),
});
