# Postman API Testing — Task 4

**API used:** ReqRes (https://reqres.in) — free public API for testing

## Setup
1. Import `SauceDemo-ReqRes-API-Tests.postman_collection.json` into Postman
2. Import `ReqRes-Environment.postman_environment.json`
3. Select "ReqRes-Environment" from the environment dropdown
4. Add your own ReqRes API key to the `apiKey` environment variable (get one free at reqres.in)

## Requests (8 total)
1. GET - List Users
2. GET - Single User (Positive)
3. GET - Single User Not Found (Negative)
4. POST - Create User (Positive)
5. POST - Create User Missing Field (Negative)
6. PUT - Update User
7. PATCH - Partial Update User
8. DELETE - Delete User

## Results
Ran via Collection Runner: **20/20 tests passed, 0 errors**, avg response time 287ms.

## Coverage
- All HTTP methods: GET, POST, PUT, PATCH, DELETE ✅
- Positive and negative test cases ✅
- Status code validation ✅
- Response body field validation ✅
- Response time checks ✅
- Environment variables (`baseUrl`, `apiKey`) ✅