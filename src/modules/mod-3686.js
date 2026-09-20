'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3686",
  name: "Replace \"U\" with \"d\"",
  description: "Replaces every U with d.",
  run: (value) => String(value).split("U").join("d"),
});
