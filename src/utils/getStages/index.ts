import { defatultStages } from '@/constants'

const getStages = ( parsedStages?: string[] ) => {
	const res = [...defatultStages]
	parsedStages.forEach( ( parsedStage ) => {
		if ( res.includes( parsedStage ) ) {
			return
		}
		
		res.push(parsedStage)
	})
	return res
}

export {
	getStages
}