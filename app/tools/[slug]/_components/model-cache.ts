// Module-level cache: survives component remounts (page navigation within the site)
const pipelineCache = new Map<string, any>();
