export const getErrorCode = (error: any) => {
	return error.response?.data?.statusCode || error.response?.status
}
