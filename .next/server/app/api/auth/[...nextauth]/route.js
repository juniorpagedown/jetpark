"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Flindomarjunior%2FDownloads%2FProjetos%2Fjetpark%20%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flindomarjunior%2FDownloads%2FProjetos%2Fjetpark%20&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Flindomarjunior%2FDownloads%2FProjetos%2Fjetpark%20%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flindomarjunior%2FDownloads%2FProjetos%2Fjetpark%20&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_lindomarjunior_Downloads_Projetos_jetpark_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/lindomarjunior/Downloads/Projetos/jetpark /app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_lindomarjunior_Downloads_Projetos_jetpark_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmxpbmRvbWFyanVuaW9yJTJGRG93bmxvYWRzJTJGUHJvamV0b3MlMkZqZXRwYXJrJTIwJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmxpbmRvbWFyanVuaW9yJTJGRG93bmxvYWRzJTJGUHJvamV0b3MlMkZqZXRwYXJrJTIwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3FDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lzdGVtYS1nZXN0YW8tcmVzdGF1cmFudGUvP2Q2ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2xpbmRvbWFyanVuaW9yL0Rvd25sb2Fkcy9Qcm9qZXRvcy9qZXRwYXJrIC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbGluZG9tYXJqdW5pb3IvRG93bmxvYWRzL1Byb2pldG9zL2pldHBhcmsgL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Flindomarjunior%2FDownloads%2FProjetos%2Fjetpark%20%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flindomarjunior%2FDownloads%2FProjetos%2Fjetpark%20&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _lib_init_db_postgres__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/init-db-postgres */ \"(rsc)/./lib/init-db-postgres.ts\");\n\n\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.username || !credentials?.password) {\n                    console.log(\"❌ Credenciais ausentes\");\n                    return null;\n                }\n                console.log(\"\\uD83D\\uDD0D Tentando autenticar:\", credentials.username);\n                try {\n                    // Garantir que o banco de dados está inicializado\n                    await (0,_lib_init_db_postgres__WEBPACK_IMPORTED_MODULE_6__.initializeDatabase)();\n                    // Primeiro, tentar buscar por username\n                    let user = null;\n                    try {\n                        user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findFirst({\n                            where: {\n                                username: credentials.username\n                            },\n                            select: {\n                                id: true,\n                                email: true,\n                                username: true,\n                                name: true,\n                                role: true,\n                                password: true\n                            }\n                        });\n                        console.log(\"\\uD83D\\uDD0D Busca por username:\", user ? \"Encontrado\" : \"N\\xe3o encontrado\");\n                    } catch (usernameError) {\n                        console.log(\"⚠️  Erro ao buscar por username (campo pode n\\xe3o existir):\", usernameError.message);\n                        // Se falhar, tentar buscar apenas por email\n                        try {\n                            user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findFirst({\n                                where: {\n                                    email: credentials.username\n                                },\n                                select: {\n                                    id: true,\n                                    email: true,\n                                    name: true,\n                                    role: true,\n                                    password: true\n                                }\n                            });\n                            console.log(\"\\uD83D\\uDD0D Busca por email como fallback:\", user ? \"Encontrado\" : \"N\\xe3o encontrado\");\n                        } catch (emailError) {\n                            console.log(\"❌ Erro ao buscar por email:\", emailError.message);\n                        }\n                    }\n                    // Se não encontrou, tentar buscar por email se o input parecer um email\n                    if (!user && credentials.username.includes(\"@\")) {\n                        try {\n                            user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findFirst({\n                                where: {\n                                    email: credentials.username\n                                },\n                                select: {\n                                    id: true,\n                                    email: true,\n                                    name: true,\n                                    role: true,\n                                    password: true\n                                }\n                            });\n                            console.log(\"\\uD83D\\uDD0D Busca adicional por email:\", user ? \"Encontrado\" : \"N\\xe3o encontrado\");\n                        } catch (error) {\n                            console.log(\"❌ Erro na busca adicional por email:\", error.message);\n                        }\n                    }\n                    console.log(\"\\uD83D\\uDC64 Usu\\xe1rio final encontrado:\", user ? \"Sim\" : \"N\\xe3o\");\n                    if (!user || !user.password) {\n                        console.log(\"❌ Usu\\xe1rio n\\xe3o encontrado ou sem senha\");\n                        return null;\n                    }\n                    // Verificar se a senha está correta\n                    const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].compare(credentials.password, user.password);\n                    console.log(\"\\uD83D\\uDD11 Senha v\\xe1lida:\", isPasswordValid ? \"Sim\" : \"N\\xe3o\");\n                    if (!isPasswordValid) {\n                        console.log(\"❌ Senha incorreta\");\n                        return null;\n                    }\n                    console.log(\"✅ Autentica\\xe7\\xe3o bem-sucedida\");\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name,\n                        role: user.role\n                    };\n                } catch (error) {\n                    console.error(\"❌ Erro geral na autentica\\xe7\\xe3o:\", error);\n                    return null;\n                }\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.sub;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3lCO0FBQ3BCO0FBQzRCO0FBQ1Y7QUFDMUI7QUFDOEI7QUFFM0QsTUFBTU8sVUFBVVAsZ0RBQVFBLENBQUM7SUFDdkJRLFNBQVNQLHdFQUFhQSxDQUFDQywrQ0FBTUE7SUFDN0JPLFdBQVc7UUFDVE4sMkVBQW1CQSxDQUFDO1lBQ2xCTyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVlDLE1BQU07Z0JBQU87Z0JBQzVDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxZQUFZLENBQUNELGFBQWFJLFVBQVU7b0JBQ3BERSxRQUFRQyxHQUFHLENBQUM7b0JBQ1osT0FBTztnQkFDVDtnQkFFQUQsUUFBUUMsR0FBRyxDQUFDLHFDQUEyQlAsWUFBWUMsUUFBUTtnQkFFM0QsSUFBSTtvQkFDRixrREFBa0Q7b0JBQ2xELE1BQU1OLHlFQUFrQkE7b0JBRXhCLHVDQUF1QztvQkFDdkMsSUFBSWEsT0FBTztvQkFFWCxJQUFJO3dCQUNGQSxPQUFPLE1BQU1qQiwrQ0FBTUEsQ0FBQ2lCLElBQUksQ0FBQ0MsU0FBUyxDQUFDOzRCQUNqQ0MsT0FBTztnQ0FDTFQsVUFBVUQsWUFBWUMsUUFBUTs0QkFDaEM7NEJBQ0FVLFFBQVE7Z0NBQ05DLElBQUk7Z0NBQ0pDLE9BQU87Z0NBQ1BaLFVBQVU7Z0NBQ1ZGLE1BQU07Z0NBQ05lLE1BQU07Z0NBQ05WLFVBQVU7NEJBQ1o7d0JBQ0Y7d0JBQ0FFLFFBQVFDLEdBQUcsQ0FBQyxvQ0FBMEJDLE9BQU8sZUFBZTtvQkFDOUQsRUFBRSxPQUFPTyxlQUFlO3dCQUN0QlQsUUFBUUMsR0FBRyxDQUFDLGdFQUE2RFEsY0FBY0MsT0FBTzt3QkFFOUYsNENBQTRDO3dCQUM1QyxJQUFJOzRCQUNGUixPQUFPLE1BQU1qQiwrQ0FBTUEsQ0FBQ2lCLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dDQUNqQ0MsT0FBTztvQ0FDTEcsT0FBT2IsWUFBWUMsUUFBUTtnQ0FDN0I7Z0NBQ0FVLFFBQVE7b0NBQ05DLElBQUk7b0NBQ0pDLE9BQU87b0NBQ1BkLE1BQU07b0NBQ05lLE1BQU07b0NBQ05WLFVBQVU7Z0NBQ1o7NEJBQ0Y7NEJBQ0FFLFFBQVFDLEdBQUcsQ0FBQywrQ0FBcUNDLE9BQU8sZUFBZTt3QkFDekUsRUFBRSxPQUFPUyxZQUFZOzRCQUNuQlgsUUFBUUMsR0FBRyxDQUFDLCtCQUErQlUsV0FBV0QsT0FBTzt3QkFDL0Q7b0JBQ0Y7b0JBRUEsd0VBQXdFO29CQUN4RSxJQUFJLENBQUNSLFFBQVFSLFlBQVlDLFFBQVEsQ0FBQ2lCLFFBQVEsQ0FBQyxNQUFNO3dCQUMvQyxJQUFJOzRCQUNGVixPQUFPLE1BQU1qQiwrQ0FBTUEsQ0FBQ2lCLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dDQUNqQ0MsT0FBTztvQ0FDTEcsT0FBT2IsWUFBWUMsUUFBUTtnQ0FDN0I7Z0NBQ0FVLFFBQVE7b0NBQ05DLElBQUk7b0NBQ0pDLE9BQU87b0NBQ1BkLE1BQU07b0NBQ05lLE1BQU07b0NBQ05WLFVBQVU7Z0NBQ1o7NEJBQ0Y7NEJBQ0FFLFFBQVFDLEdBQUcsQ0FBQywyQ0FBaUNDLE9BQU8sZUFBZTt3QkFDckUsRUFBRSxPQUFPVyxPQUFPOzRCQUNkYixRQUFRQyxHQUFHLENBQUMsd0NBQXdDWSxNQUFNSCxPQUFPO3dCQUNuRTtvQkFDRjtvQkFFQVYsUUFBUUMsR0FBRyxDQUFDLDZDQUFnQ0MsT0FBTyxRQUFRO29CQUUzRCxJQUFJLENBQUNBLFFBQVEsQ0FBQ0EsS0FBS0osUUFBUSxFQUFFO3dCQUMzQkUsUUFBUUMsR0FBRyxDQUFDO3dCQUNaLE9BQU87b0JBQ1Q7b0JBRUEsb0NBQW9DO29CQUNwQyxNQUFNYSxrQkFBa0IsTUFBTTFCLHdEQUFjLENBQUNNLFlBQVlJLFFBQVEsRUFBRUksS0FBS0osUUFBUTtvQkFFaEZFLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBb0JhLGtCQUFrQixRQUFRO29CQUUxRCxJQUFJLENBQUNBLGlCQUFpQjt3QkFDcEJkLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWixPQUFPO29CQUNUO29CQUVBRCxRQUFRQyxHQUFHLENBQUM7b0JBQ1osT0FBTzt3QkFDTEssSUFBSUosS0FBS0ksRUFBRTt3QkFDWEMsT0FBT0wsS0FBS0ssS0FBSzt3QkFDakJkLE1BQU1TLEtBQUtULElBQUk7d0JBQ2ZlLE1BQU1OLEtBQUtNLElBQUk7b0JBQ2pCO2dCQUNGLEVBQUUsT0FBT0ssT0FBTztvQkFDZGIsUUFBUWEsS0FBSyxDQUFDLHVDQUFpQ0E7b0JBQy9DLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBQ0ExQixzRUFBY0EsQ0FBQztZQUNiNkIsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFeEIsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1J3QixNQUFNbEIsSUFBSSxHQUFHTixLQUFLTSxJQUFJO1lBQ3hCO1lBQ0EsT0FBT2tCO1FBQ1Q7UUFDQSxNQUFNSixTQUFRLEVBQUVBLE9BQU8sRUFBRUksS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU87Z0JBQ1RKLFFBQVFwQixJQUFJLENBQUNJLEVBQUUsR0FBR29CLE1BQU1DLEdBQUc7Z0JBQzNCTCxRQUFRcEIsSUFBSSxDQUFDTSxJQUFJLEdBQUdrQixNQUFNbEIsSUFBSTtZQUNoQztZQUNBLE9BQU9jO1FBQ1Q7SUFDRjtJQUNBTSxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtBQUNGO0FBRTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lzdGVtYS1nZXN0YW8tcmVzdGF1cmFudGUvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIlxuaW1wb3J0IHsgaW5pdGlhbGl6ZURhdGFiYXNlIH0gZnJvbSBcIkAvbGliL2luaXQtZGItcG9zdGdyZXNcIlxuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoe1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiVXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8udXNlcm5hbWUgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfinYwgQ3JlZGVuY2lhaXMgYXVzZW50ZXMnKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygn8J+UjSBUZW50YW5kbyBhdXRlbnRpY2FyOicsIGNyZWRlbnRpYWxzLnVzZXJuYW1lKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gR2FyYW50aXIgcXVlIG8gYmFuY28gZGUgZGFkb3MgZXN0w6EgaW5pY2lhbGl6YWRvXG4gICAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZURhdGFiYXNlKClcblxuICAgICAgICAgIC8vIFByaW1laXJvLCB0ZW50YXIgYnVzY2FyIHBvciB1c2VybmFtZVxuICAgICAgICAgIGxldCB1c2VyID0gbnVsbFxuICAgICAgICAgIFxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICByb2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn8J+UjSBCdXNjYSBwb3IgdXNlcm5hbWU6JywgdXNlciA/ICdFbmNvbnRyYWRvJyA6ICdOw6NvIGVuY29udHJhZG8nKVxuICAgICAgICAgIH0gY2F0Y2ggKHVzZXJuYW1lRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfimqDvuI8gIEVycm8gYW8gYnVzY2FyIHBvciB1c2VybmFtZSAoY2FtcG8gcG9kZSBuw6NvIGV4aXN0aXIpOicsIHVzZXJuYW1lRXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YXIgYnVzY2FyIGFwZW5hcyBwb3IgZW1haWxcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMudXNlcm5hbWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICByb2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfwn5SNIEJ1c2NhIHBvciBlbWFpbCBjb21vIGZhbGxiYWNrOicsIHVzZXIgPyAnRW5jb250cmFkbycgOiAnTsOjbyBlbmNvbnRyYWRvJylcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVtYWlsRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+KdjCBFcnJvIGFvIGJ1c2NhciBwb3IgZW1haWw6JywgZW1haWxFcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91LCB0ZW50YXIgYnVzY2FyIHBvciBlbWFpbCBzZSBvIGlucHV0IHBhcmVjZXIgdW0gZW1haWxcbiAgICAgICAgICBpZiAoIXVzZXIgJiYgY3JlZGVudGlhbHMudXNlcm5hbWUuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy51c2VybmFtZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHJvbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ/CflI0gQnVzY2EgYWRpY2lvbmFsIHBvciBlbWFpbDonLCB1c2VyID8gJ0VuY29udHJhZG8nIDogJ07Do28gZW5jb250cmFkbycpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn4p2MIEVycm8gbmEgYnVzY2EgYWRpY2lvbmFsIHBvciBlbWFpbDonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnNvbGUubG9nKCfwn5GkIFVzdcOhcmlvIGZpbmFsIGVuY29udHJhZG86JywgdXNlciA/ICdTaW0nIDogJ07Do28nKVxuXG4gICAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn4p2MIFVzdcOhcmlvIG7Do28gZW5jb250cmFkbyBvdSBzZW0gc2VuaGEnKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBWZXJpZmljYXIgc2UgYSBzZW5oYSBlc3TDoSBjb3JyZXRhXG4gICAgICAgICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coJ/CflJEgU2VuaGEgdsOhbGlkYTonLCBpc1Bhc3N3b3JkVmFsaWQgPyAnU2ltJyA6ICdOw6NvJylcblxuICAgICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn4p2MIFNlbmhhIGluY29ycmV0YScpXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnNvbGUubG9nKCfinIUgQXV0ZW50aWNhw6fDo28gYmVtLXN1Y2VkaWRhJylcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEVycm8gZ2VyYWwgbmEgYXV0ZW50aWNhw6fDo286JywgZXJyb3IpXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEISxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQhLFxuICAgIH0pLFxuICBdLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGVcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWIhXG4gICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgfSxcbn0pXG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJiY3J5cHQiLCJpbml0aWFsaXplRGF0YWJhc2UiLCJoYW5kbGVyIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwic2VsZWN0IiwiaWQiLCJlbWFpbCIsInJvbGUiLCJ1c2VybmFtZUVycm9yIiwibWVzc2FnZSIsImVtYWlsRXJyb3IiLCJpbmNsdWRlcyIsImVycm9yIiwiaXNQYXNzd29yZFZhbGlkIiwiY29tcGFyZSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic3ViIiwicGFnZXMiLCJzaWduSW4iLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/init-db-postgres.ts":
/*!*********************************!*\
  !*** ./lib/init-db-postgres.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeDatabase: () => (/* binding */ initializeDatabase)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function initializeDatabase() {\n    try {\n        console.log(\"\\uD83D\\uDD04 Inicializando banco de dados PostgreSQL...\");\n        // Verifica se há usuários no banco\n        const userCount = await prisma.user.count();\n        if (userCount === 0) {\n            console.log(\"\\uD83D\\uDC64 Criando usu\\xe1rio admin padr\\xe3o...\");\n            const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hash(\"admin123\", 12);\n            await prisma.user.create({\n                data: {\n                    username: \"admin\",\n                    email: \"admin@jetpark.com\",\n                    password: hashedPassword\n                }\n            });\n            console.log(\"✅ Usu\\xe1rio admin criado com sucesso\");\n        } else {\n            console.log(`ℹ️  Banco já possui ${userCount} usuário(s)`);\n        }\n        return {\n            success: true,\n            userCount: await prisma.user.count()\n        };\n    } catch (error) {\n        console.error(\"❌ Erro ao inicializar banco:\", error);\n        return {\n            success: false,\n            error: error.message\n        };\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvaW5pdC1kYi1wb3N0Z3Jlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZDO0FBQ2hCO0FBRTdCLE1BQU1FLFNBQVMsSUFBSUYsd0RBQVlBO0FBRXhCLGVBQWVHO0lBQ3BCLElBQUk7UUFDRkMsUUFBUUMsR0FBRyxDQUFDO1FBRVosbUNBQW1DO1FBQ25DLE1BQU1DLFlBQVksTUFBTUosT0FBT0ssSUFBSSxDQUFDQyxLQUFLO1FBRXpDLElBQUlGLGNBQWMsR0FBRztZQUNuQkYsUUFBUUMsR0FBRyxDQUFDO1lBRVosTUFBTUksaUJBQWlCLE1BQU1SLHFEQUFXLENBQUMsWUFBWTtZQUVyRCxNQUFNQyxPQUFPSyxJQUFJLENBQUNJLE1BQU0sQ0FBQztnQkFDdkJDLE1BQU07b0JBQ0pDLFVBQVU7b0JBQ1ZDLE9BQU87b0JBQ1BDLFVBQVVOO2dCQUNaO1lBQ0Y7WUFFQUwsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsT0FBTztZQUNMRCxRQUFRQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsRUFBRUMsVUFBVSxXQUFXLENBQUM7UUFDM0Q7UUFFQSxPQUFPO1lBQUVVLFNBQVM7WUFBTVYsV0FBVyxNQUFNSixPQUFPSyxJQUFJLENBQUNDLEtBQUs7UUFBRztJQUMvRCxFQUFFLE9BQU9TLE9BQU87UUFDZGIsUUFBUWEsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBTztZQUFFRCxTQUFTO1lBQU9DLE9BQU9BLE1BQU1DLE9BQU87UUFBQztJQUNoRCxTQUFVO1FBQ1IsTUFBTWhCLE9BQU9pQixXQUFXO0lBQzFCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXN0ZW1hLWdlc3Rhby1yZXN0YXVyYW50ZS8uL2xpYi9pbml0LWRiLXBvc3RncmVzLnRzPzM3ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVEYXRhYmFzZSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygn8J+UhCBJbmljaWFsaXphbmRvIGJhbmNvIGRlIGRhZG9zIFBvc3RncmVTUUwuLi4nKVxuXG4gICAgLy8gVmVyaWZpY2Egc2UgaMOhIHVzdcOhcmlvcyBubyBiYW5jb1xuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IHByaXNtYS51c2VyLmNvdW50KClcbiAgICBcbiAgICBpZiAodXNlckNvdW50ID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygn8J+RpCBDcmlhbmRvIHVzdcOhcmlvIGFkbWluIHBhZHLDo28uLi4nKVxuICAgICAgXG4gICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKCdhZG1pbjEyMycsIDEyKVxuICAgICAgXG4gICAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlcm5hbWU6ICdhZG1pbicsXG4gICAgICAgICAgZW1haWw6ICdhZG1pbkBqZXRwYXJrLmNvbScsXG4gICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKCfinIUgVXN1w6FyaW8gYWRtaW4gY3JpYWRvIGNvbSBzdWNlc3NvJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYOKEue+4jyAgQmFuY28gasOhIHBvc3N1aSAke3VzZXJDb3VudH0gdXN1w6FyaW8ocylgKVxuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXJDb3VudDogYXdhaXQgcHJpc21hLnVzZXIuY291bnQoKSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign4p2MIEVycm8gYW8gaW5pY2lhbGl6YXIgYmFuY286JywgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiYmNyeXB0IiwicHJpc21hIiwiaW5pdGlhbGl6ZURhdGFiYXNlIiwiY29uc29sZSIsImxvZyIsInVzZXJDb3VudCIsInVzZXIiLCJjb3VudCIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsImNyZWF0ZSIsImRhdGEiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdWNjZXNzIiwiZXJyb3IiLCJtZXNzYWdlIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/init-db-postgres.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Npc3RlbWEtZ2VzdGFvLXJlc3RhdXJhbnRlLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBuZXcgUHJpc21hQ2xpZW50KClcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@next-auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Flindomarjunior%2FDownloads%2FProjetos%2Fjetpark%20%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flindomarjunior%2FDownloads%2FProjetos%2Fjetpark%20&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();