import { UnknownRecord } from "type-fest"
import { getDefaults, getStages } from "./utils"
import { parseConfig } from "./utils/parseConfig"

const parseGitlabConfig = ( yml: string ): UnknownRecord => {

	const validated = parseConfig(yml, {extension: 'yml'})
	const stages = getStages(validated?.stages)
	const defaults = getDefaults(validated?.default)
	
	return {
		defaults,
		stages
	}
}

export {
	parseGitlabConfig
}
