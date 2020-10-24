const baseUrl = window.location.origin;
const config = {
    userId: 1,
    maxNameLength: 20,
    baseUrl: baseUrl,
    priceApi: `${baseUrl}/price/`,
    pageApi: `${baseUrl}/page/`,
    pageListApi: `${baseUrl}/page/list/`,
    configApi: `${baseUrl}/website-config/`,
    configListApi: `${baseUrl}/website-config/list/`,
}

export default config