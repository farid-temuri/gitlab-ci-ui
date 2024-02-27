import { UnknownRecord } from "type-fest"
import { load } from 'js-yaml'
import { getDefaults, getStages } from "./utils"
import { GitlabCofig } from "./types"

const parseGitlabConfig = ( yml: string ): UnknownRecord => {
	
console.log(load(yml));

	const validated = GitlabCofig.parse(load(yml))
	const stages = getStages(validated.stages)
	const defaults = getDefaults(validated.default)
	
	return {
		defaults,
		stages
	}
}

export {
	parseGitlabConfig
}
