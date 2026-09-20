'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0045",
  name: "Mask all but last 3",
  description: "Masks all but the last 3 characters.",
  run: (value) => { const s = String(value); const keep = 3; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
