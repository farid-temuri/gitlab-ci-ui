const globalKeywords = [
	'default',
	'include',
	'stages',
	'variables',
	'workflow',
] as  const

const headerKeywords = [
	'spec',
] as  const

const jobsKeywords = [
	'after_script',
	'allow_failure',
	'artifacts',
	'before_script',
	'cache',
	'coverage',
	'dast_configuration',
	'dependencies',
	'environment',
	'extends',
	'identity',
	'image',
	'inherit',
	'interruptible',
	'needs',
	'pages',
	'parallel',
	'release',
	'resource_group',
	'retry',
	'rules',
	'script',
	'secrets',
	'services',
	'stage',
	'tags',
	'timeout',
	'trigger',
	'variables',
	'when',
] as const

const keywordsWithDefault = [
	'after_script',
	'artifacts',
	'before_script',
	'cache',
	'hooks',
	'id_tokens',
	'image',
	'interruptible',
	'retry',
	'services',
	'tags',
	'timeout', // doesn't work due to this issue https://gitlab.com/gitlab-org/gitlab/-/issues/213634
] as const

const a = jobsKeywords.length
