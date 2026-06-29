import _defaults from "lodash/defaults"

export interface FetchJsonOptions {
  method?: string
  headers?: Record<string, string>
  json?: unknown
  [key: string]: unknown
}

export interface FetchJsonResult<T = unknown> {
  response?: Response
  status?: number
  ok?: boolean
  json?: T
  errorMessage?: string
  error?: Error
}

export async function fetchJson<T = unknown>(url: string, options: FetchJsonOptions = {}): Promise<FetchJsonResult<T>> {
  const result: FetchJsonResult<T> = {}
  try {
    const args = _defaults(options, {
      method: "GET"
      ,headers: {
        "Content-type": "application/json"
      }
    }) as FetchJsonOptions & { method: string; headers: Record<string, string> }
    if (typeof options.json !== "undefined")
      args.body = JSON.stringify(options.json)

    const response = await fetch(url, args as RequestInit)

    result.response = response
    result.status = response.status
    result.ok = response.ok
    result.json = await response.json() as T

    //we could consistently handle soft errors here. For example:
    result.errorMessage = (result.json as { error?: string })?.error
  } catch (err) {
    result.error = err as Error
    result.errorMessage = (err as Error).message
  }
  return result
}

export default fetchJson
