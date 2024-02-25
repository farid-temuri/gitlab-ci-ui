import { UnknownRecord } from "type-fest"
import { load } from 'js-yaml'
import { getDefaults, getStages } from "./utils"

const parseGitlabConfig = ( yml: string ): UnknownRecord => {
	const parsedYml = load( yml )
	const stages = getStages(parsedYml.stages)
	const defaults = getDefaults(parsedYml.default)
	return {
		defaults,
		stages
	}
}

export {
	parseGitlabConfig
}