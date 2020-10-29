// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
// https://mswjs.io/docs/api
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import config from "./config";


export const server = setupServer(
    rest.get(config.pageListApi, (req, res, ctx) => {
        return res(ctx.json([
            {
                "id": 1,
                "name": "Sunset Canola Oil",
                "url": "https://shop.coles.com.au/a/national/product/gold-sunset-canola-oil",
                "created_time": "2020-09-05T17:20:47.090837",
                "next_check": "2020-10-30T09:22:52.536032",
                "freq": 24,
                "retry": 0,
                "active": true,
                "user_id": 1,
                "config_id": 1
            },
            {
                "id": 2,
                "name": "Vittoria Organic Espresso Coffee Beans",
                "url": "https://shop.coles.com.au/a/national/product/vittoria-organic-coffee-beans",
                "created_time": "2020-09-05T17:20:47.091332",
                "next_check": "2020-10-29T16:37:41.943421",
                "freq": 24,
                "retry": 0,
                "active": true,
                "user_id": 1,
                "config_id": 1
            },
            {
                "id": 3,
                "name": "Lavazza Qualita Rossa Coffee Beans",
                "url": "https://shop.coles.com.au/a/national/product/lavazza-qualita-rossa-beans",
                "created_time": "2020-09-05T17:20:47.091577",
                "next_check": "2020-10-30T09:22:06.022820",
                "freq": 24,
                "retry": 0,
                "active": true,
                "user_id": 1,
                "config_id": 1
            },
            {
                "id": 4,
                "name": "Grinders Rich Espresso Coffee Beans",
                "url": "https://shop.coles.com.au/a/national/product/grinders-rich-espresso-coffee-beans",
                "created_time": "2020-09-05T17:20:47.095228",
                "next_check": "2020-10-30T09:53:34.036057",
                "freq": 24,
                "retry": 0,
                "active": true,
                "user_id": 1,
                "config_id": 1
            }]))
    }),
    rest.get(config.configListApi, (req, res, ctx) => {
        return res(ctx.json([
            {
                "id": 1,
                "name": "Coles",
                "xpath": "//span/strong[@class=\"product-price\"] | //*[@id=\"main-content-inside\"]/div[2]/div/header/div[3]/div/span[1]",
                "active": true
            },
            {
                "id": 2,
                "name": "Woolies",
                "xpath": "//div[@class=\"price price--large\"] | //div[@class=\"price price--large ng-star-inserted\"]",
                "active": true
            },
            {
                "id": 3,
                "name": "Chemist",
                "xpath": "//span[@class=\"product__price\"] | //div[@class=\"product__price\"] | //div[@class=\"Price\"]",
                "active": true
            }
        ]))
    }),
    rest.get(config.priceApi, (req, res, ctx) => {
        return res(ctx.json(
            [
                {
                    "id": 893,
                    "price": "$18.00",
                    "created_time": "2020-10-29T09:22:52.584343",
                    "page_id": req.params.page_id
                },
                {
                    "id": 874,
                    "price": "$18.00",
                    "created_time": "2020-10-28T09:16:01.501927",
                    "page_id": req.params.page_id
                },
                {
                    "id": 855,
                    "price": "$9.00",
                    "created_time": "2020-10-27T09:05:58.212951",
                    "page_id": req.params.page_id
                }
            ]
        ));
    }),
    rest.get(config.pageApi, (req, res, ctx) => {
        return res(ctx.json({
            "id": 1,
            "name": "Sunset Canola Oil",
            "url": "https://shop.coles.com.au/a/national/product/gold-sunset-canola-oil",
            "created_time": "2020-09-05T17:20:47.090837",
            "next_check": "2020-10-30T09:22:52.536032",
            "freq": 24,
            "retry": 0,
            "active": true,
            "user_id": 1,
            "config_id": 1
        }));
    })
)

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());