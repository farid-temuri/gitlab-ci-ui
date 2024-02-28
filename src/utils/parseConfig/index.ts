import { GitlabCofig } from "@/types"
import { load } from "js-yaml"

type allowedExtensions = "yml"

const parseConfig = ( configStr:string, optons: { extension:allowedExtensions } ) => {
	if ( optons.extension === 'yml' ) {
		return GitlabCofig.parse( load(configStr))
	}
}

export {
	parseConfig
}