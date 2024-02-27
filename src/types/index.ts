import { defaultsSchema } from "@/constants";
import { z } from "zod";

const GitlabCofig = z.object( {
	stages: z.array( z.string() ),
	default: defaultsSchema.partial()
} )

export {
	GitlabCofig
}