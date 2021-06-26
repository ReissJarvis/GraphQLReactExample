export interface BaseDogResponse<T> {
    message: T
    status: "success" | "fail"
}

export function hasFailed(response: BaseDogResponse<any>): Boolean {
    return response.status !== "success"
}
