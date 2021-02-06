import { createApi } from 'api-service'

import * as commands from './commands'

const { api: {{FEATURE_NAME}}Api } = createApi({ commands })

export { {{FEATURE_NAME}}Api }
