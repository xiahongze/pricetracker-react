const baseUrl = window.location.origin;
const userId = 1;
const config = {
    userId: userId,
    maxNameLength: 20,
    baseUrl: baseUrl,
    priceApi: `${baseUrl}/price/`,
    pageApi: `${baseUrl}/page/`,
    pageListApi: `${baseUrl}/page/list?user_id=${userId}`,
    configApi: `${baseUrl}/website-config/`,
    configListApi: `${baseUrl}/website-config/list/`,
}

export default config