import { z } from 'zod'

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

export const defaultsSchema =  z.object( {
	after_script: z.array( z.string() ),
	artifacts: z.object( {
		paths: z.array(z.string()),
		exclude: z.array( z.string() ),
		expire_in: z.string() ,
		expose_as: z.string() ,
		name: z.string() ,
		untracked: z.boolean() ,
		when: z.string() ,
		public: z.boolean() ,
		reports: z.object( {
			// TODO ...https://docs.gitlab.com/ee/ci/yaml/artifacts_reports.html add later 
		}),
	}
	)
})

export {
	keywordsWithDefault,
	jobsKeywords,
	globalKeywords,
	headerKeywords
}