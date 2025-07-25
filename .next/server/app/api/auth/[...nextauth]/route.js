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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _lib_ensure_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/ensure-users */ \"(rsc)/./lib/ensure-users.ts\");\n\n\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.username || !credentials?.password) {\n                    console.log(\"❌ Credenciais ausentes\");\n                    return null;\n                }\n                console.log(\"\\uD83D\\uDD0D Tentando autenticar:\", credentials.username);\n                // Garantir que os usuários padrão existam\n                await (0,_lib_ensure_users__WEBPACK_IMPORTED_MODULE_6__.ensureDefaultUsers)();\n                // Buscar o usuário no banco de dados por username ou email\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findFirst({\n                    where: {\n                        OR: [\n                            {\n                                username: credentials.username\n                            },\n                            {\n                                email: credentials.username\n                            }\n                        ]\n                    },\n                    select: {\n                        id: true,\n                        email: true,\n                        username: true,\n                        name: true,\n                        role: true,\n                        password: true\n                    }\n                });\n                console.log(\"\\uD83D\\uDC64 Usu\\xe1rio encontrado:\", user ? \"Sim\" : \"N\\xe3o\");\n                if (!user || !user.password) {\n                    console.log(\"❌ Usu\\xe1rio n\\xe3o encontrado ou sem senha\");\n                    return null;\n                }\n                // Verificar se a senha está correta\n                const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"].compare(credentials.password, user.password);\n                console.log(\"\\uD83D\\uDD11 Senha v\\xe1lida:\", isPasswordValid ? \"Sim\" : \"N\\xe3o\");\n                if (!isPasswordValid) {\n                    console.log(\"❌ Senha incorreta\");\n                    return null;\n                }\n                console.log(\"✅ Autentica\\xe7\\xe3o bem-sucedida\");\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    role: user.role\n                };\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.sub;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3lCO0FBQ3BCO0FBQzRCO0FBQ1Y7QUFDMUI7QUFDMEI7QUFFdkQsTUFBTU8sVUFBVVAsZ0RBQVFBLENBQUM7SUFDdkJRLFNBQVNQLHdFQUFhQSxDQUFDQywrQ0FBTUE7SUFDN0JPLFdBQVc7UUFDVE4sMkVBQW1CQSxDQUFDO1lBQ2xCTyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVlDLE1BQU07Z0JBQU87Z0JBQzVDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxZQUFZLENBQUNELGFBQWFJLFVBQVU7b0JBQ3BERSxRQUFRQyxHQUFHLENBQUM7b0JBQ1osT0FBTztnQkFDVDtnQkFFQUQsUUFBUUMsR0FBRyxDQUFDLHFDQUEyQlAsWUFBWUMsUUFBUTtnQkFFM0QsMENBQTBDO2dCQUMxQyxNQUFNTixxRUFBa0JBO2dCQUV4QiwyREFBMkQ7Z0JBQzNELE1BQU1hLE9BQU8sTUFBTWpCLCtDQUFNQSxDQUFDaUIsSUFBSSxDQUFDQyxTQUFTLENBQUM7b0JBQ3ZDQyxPQUFPO3dCQUNMQyxJQUFJOzRCQUNGO2dDQUFFVixVQUFVRCxZQUFZQyxRQUFROzRCQUFDOzRCQUNqQztnQ0FBRVcsT0FBT1osWUFBWUMsUUFBUTs0QkFBQzt5QkFDL0I7b0JBQ0g7b0JBQ0FZLFFBQVE7d0JBQ05DLElBQUk7d0JBQ0pGLE9BQU87d0JBQ1BYLFVBQVU7d0JBQ1ZGLE1BQU07d0JBQ05nQixNQUFNO3dCQUNOWCxVQUFVO29CQUNaO2dCQUNGO2dCQUVBRSxRQUFRQyxHQUFHLENBQUMsdUNBQTBCQyxPQUFPLFFBQVE7Z0JBRXJELElBQUksQ0FBQ0EsUUFBUSxDQUFDQSxLQUFLSixRQUFRLEVBQUU7b0JBQzNCRSxRQUFRQyxHQUFHLENBQUM7b0JBQ1osT0FBTztnQkFDVDtnQkFFQSxvQ0FBb0M7Z0JBQ3BDLE1BQU1TLGtCQUFrQixNQUFNdEIsd0RBQWMsQ0FBQ00sWUFBWUksUUFBUSxFQUFFSSxLQUFLSixRQUFRO2dCQUVoRkUsUUFBUUMsR0FBRyxDQUFDLGlDQUFvQlMsa0JBQWtCLFFBQVE7Z0JBRTFELElBQUksQ0FBQ0EsaUJBQWlCO29CQUNwQlYsUUFBUUMsR0FBRyxDQUFDO29CQUNaLE9BQU87Z0JBQ1Q7Z0JBRUFELFFBQVFDLEdBQUcsQ0FBQztnQkFDWixPQUFPO29CQUNMTyxJQUFJTixLQUFLTSxFQUFFO29CQUNYRixPQUFPSixLQUFLSSxLQUFLO29CQUNqQmIsTUFBTVMsS0FBS1QsSUFBSTtvQkFDZmdCLE1BQU1QLEtBQUtPLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtRQUNBdEIsc0VBQWNBLENBQUM7WUFDYnlCLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtLQUNEO0lBQ0RDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRXBCLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSb0IsTUFBTWIsSUFBSSxHQUFHUCxLQUFLTyxJQUFJO1lBQ3hCO1lBQ0EsT0FBT2E7UUFDVDtRQUNBLE1BQU1KLFNBQVEsRUFBRUEsT0FBTyxFQUFFSSxLQUFLLEVBQUU7WUFDOUIsSUFBSUEsT0FBTztnQkFDVEosUUFBUWhCLElBQUksQ0FBQ00sRUFBRSxHQUFHYyxNQUFNQyxHQUFHO2dCQUMzQkwsUUFBUWhCLElBQUksQ0FBQ08sSUFBSSxHQUFHYSxNQUFNYixJQUFJO1lBQ2hDO1lBQ0EsT0FBT1M7UUFDVDtJQUNGO0lBQ0FNLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0Y7QUFFMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXN0ZW1hLWdlc3Rhby1yZXN0YXVyYW50ZS8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIlxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiXG5pbXBvcnQgeyBlbnN1cmVEZWZhdWx0VXNlcnMgfSBmcm9tIFwiQC9saWIvZW5zdXJlLXVzZXJzXCJcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LnVzZXJuYW1lIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn4p2MIENyZWRlbmNpYWlzIGF1c2VudGVzJylcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ/CflI0gVGVudGFuZG8gYXV0ZW50aWNhcjonLCBjcmVkZW50aWFscy51c2VybmFtZSlcblxuICAgICAgICAvLyBHYXJhbnRpciBxdWUgb3MgdXN1w6FyaW9zIHBhZHLDo28gZXhpc3RhbVxuICAgICAgICBhd2FpdCBlbnN1cmVEZWZhdWx0VXNlcnMoKVxuXG4gICAgICAgIC8vIEJ1c2NhciBvIHVzdcOhcmlvIG5vIGJhbmNvIGRlIGRhZG9zIHBvciB1c2VybmFtZSBvdSBlbWFpbFxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgT1I6IFtcbiAgICAgICAgICAgICAgeyB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUgfSxcbiAgICAgICAgICAgICAgeyBlbWFpbDogY3JlZGVudGlhbHMudXNlcm5hbWUgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgcm9sZTogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn5GkIFVzdcOhcmlvIGVuY29udHJhZG86JywgdXNlciA/ICdTaW0nIDogJ07Do28nKVxuXG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlci5wYXNzd29yZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfinYwgVXN1w6FyaW8gbsOjbyBlbmNvbnRyYWRvIG91IHNlbSBzZW5oYScpXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFZlcmlmaWNhciBzZSBhIHNlbmhhIGVzdMOhIGNvcnJldGFcbiAgICAgICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygn8J+UkSBTZW5oYSB2w6FsaWRhOicsIGlzUGFzc3dvcmRWYWxpZCA/ICdTaW0nIDogJ07Do28nKVxuXG4gICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+KdjCBTZW5oYSBpbmNvcnJldGEnKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygn4pyFIEF1dGVudGljYcOnw6NvIGJlbS1zdWNlZGlkYScpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEISxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQhLFxuICAgIH0pLFxuICBdLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGVcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWIhXG4gICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgfSxcbn0pXG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJiY3J5cHQiLCJlbnN1cmVEZWZhdWx0VXNlcnMiLCJoYW5kbGVyIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwiT1IiLCJlbWFpbCIsInNlbGVjdCIsImlkIiwicm9sZSIsImlzUGFzc3dvcmRWYWxpZCIsImNvbXBhcmUiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInN1YiIsInBhZ2VzIiwic2lnbkluIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/ensure-users.ts":
/*!*****************************!*\
  !*** ./lib/ensure-users.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ensureDefaultUsers: () => (/* binding */ ensureDefaultUsers)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\nasync function ensureDefaultUsers() {\n    try {\n        // Verificar se já existem usuários\n        let userCount = 0;\n        try {\n            userCount = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.count();\n        } catch (error) {\n            // Se der erro, provavelmente o schema não está atualizado\n            console.log(\"⚠️  Erro ao contar usu\\xe1rios, possivelmente schema desatualizado:\", error.message);\n            // Tentar deletar todos os usuários para forçar recriação\n            try {\n                await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.deleteMany({});\n                console.log(\"\\uD83D\\uDDD1️  Usu\\xe1rios antigos removidos\");\n            } catch (deleteError) {\n                console.log(\"ℹ️  N\\xe3o foi poss\\xedvel remover usu\\xe1rios antigos (normal se n\\xe3o existirem)\");\n            }\n            userCount = 0;\n        }\n        if (userCount === 0) {\n            console.log(\"\\uD83D\\uDE80 Criando usu\\xe1rios padr\\xe3o...\");\n            // Hash para a senha padrão \"123456\"\n            const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hash(\"123456\", 12);\n            // Criar usuários padrão\n            const users = [\n                {\n                    username: \"admin\",\n                    email: \"admin@sistema.com\",\n                    name: \"Administrador\",\n                    password: hashedPassword,\n                    role: \"ADMIN\"\n                },\n                {\n                    username: \"gerente\",\n                    email: \"gerente@sistema.com\",\n                    name: \"Gerente\",\n                    password: hashedPassword,\n                    role: \"GERENTE\"\n                },\n                {\n                    username: \"atendente\",\n                    email: \"atendente@sistema.com\",\n                    name: \"Atendente\",\n                    password: hashedPassword,\n                    role: \"ATENDENTE\"\n                },\n                {\n                    username: \"cozinha\",\n                    email: \"cozinha@sistema.com\",\n                    name: \"Cozinha\",\n                    password: hashedPassword,\n                    role: \"COZINHA\"\n                }\n            ];\n            for (const user of users){\n                try {\n                    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.create({\n                        data: user\n                    });\n                    console.log(`✅ Usuário ${user.username} criado`);\n                } catch (createError) {\n                    console.log(`⚠️  Erro ao criar usuário ${user.username}:`, createError.message);\n                }\n            }\n            console.log(\"✅ Usu\\xe1rios padr\\xe3o criados com sucesso!\");\n        } else {\n            console.log(`ℹ️  Já existem ${userCount} usuários no banco`);\n        }\n    } catch (error) {\n        console.error(\"❌ Erro ao garantir usu\\xe1rios padr\\xe3o:\", error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZW5zdXJlLXVzZXJzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUNSO0FBRXRCLGVBQWVFO0lBQ3BCLElBQUk7UUFDRixtQ0FBbUM7UUFDbkMsSUFBSUMsWUFBWTtRQUVoQixJQUFJO1lBQ0ZBLFlBQVksTUFBTUgsK0NBQU1BLENBQUNJLElBQUksQ0FBQ0MsS0FBSztRQUNyQyxFQUFFLE9BQU9DLE9BQU87WUFDZCwwREFBMEQ7WUFDMURDLFFBQVFDLEdBQUcsQ0FBQyx1RUFBb0VGLE1BQU1HLE9BQU87WUFFN0YseURBQXlEO1lBQ3pELElBQUk7Z0JBQ0YsTUFBTVQsK0NBQU1BLENBQUNJLElBQUksQ0FBQ00sVUFBVSxDQUFDLENBQUM7Z0JBQzlCSCxRQUFRQyxHQUFHLENBQUM7WUFDZCxFQUFFLE9BQU9HLGFBQWE7Z0JBQ3BCSixRQUFRQyxHQUFHLENBQUM7WUFDZDtZQUVBTCxZQUFZO1FBQ2Q7UUFFQSxJQUFJQSxjQUFjLEdBQUc7WUFDbkJJLFFBQVFDLEdBQUcsQ0FBQztZQUVaLG9DQUFvQztZQUNwQyxNQUFNSSxpQkFBaUIsTUFBTVgscURBQVcsQ0FBQyxVQUFVO1lBRW5ELHdCQUF3QjtZQUN4QixNQUFNYSxRQUFRO2dCQUNaO29CQUNFQyxVQUFVO29CQUNWQyxPQUFPO29CQUNQQyxNQUFNO29CQUNOQyxVQUFVTjtvQkFDVk8sTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUosVUFBVTtvQkFDVkMsT0FBTztvQkFDUEMsTUFBTTtvQkFDTkMsVUFBVU47b0JBQ1ZPLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VKLFVBQVU7b0JBQ1ZDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLFVBQVVOO29CQUNWTyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFSixVQUFVO29CQUNWQyxPQUFPO29CQUNQQyxNQUFNO29CQUNOQyxVQUFVTjtvQkFDVk8sTUFBTTtnQkFDUjthQUNEO1lBRUQsS0FBSyxNQUFNZixRQUFRVSxNQUFPO2dCQUN4QixJQUFJO29CQUNGLE1BQU1kLCtDQUFNQSxDQUFDSSxJQUFJLENBQUNnQixNQUFNLENBQUM7d0JBQ3ZCQyxNQUFNakI7b0JBQ1I7b0JBQ0FHLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRUosS0FBS1csUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDakQsRUFBRSxPQUFPTyxhQUFhO29CQUNwQmYsUUFBUUMsR0FBRyxDQUFDLENBQUMsMEJBQTBCLEVBQUVKLEtBQUtXLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRU8sWUFBWWIsT0FBTztnQkFDaEY7WUFDRjtZQUVBRixRQUFRQyxHQUFHLENBQUM7UUFDZCxPQUFPO1lBQ0xELFFBQVFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRUwsVUFBVSxrQkFBa0IsQ0FBQztRQUM3RDtJQUNGLEVBQUUsT0FBT0csT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsNkNBQXVDQTtJQUN2RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lzdGVtYS1nZXN0YW8tcmVzdGF1cmFudGUvLi9saWIvZW5zdXJlLXVzZXJzLnRzPzZhNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZURlZmF1bHRVc2VycygpIHtcbiAgdHJ5IHtcbiAgICAvLyBWZXJpZmljYXIgc2UgasOhIGV4aXN0ZW0gdXN1w6FyaW9zXG4gICAgbGV0IHVzZXJDb3VudCA9IDA7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIHVzZXJDb3VudCA9IGF3YWl0IHByaXNtYS51c2VyLmNvdW50KClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gU2UgZGVyIGVycm8sIHByb3ZhdmVsbWVudGUgbyBzY2hlbWEgbsOjbyBlc3TDoSBhdHVhbGl6YWRvXG4gICAgICBjb25zb2xlLmxvZygn4pqg77iPICBFcnJvIGFvIGNvbnRhciB1c3XDoXJpb3MsIHBvc3NpdmVsbWVudGUgc2NoZW1hIGRlc2F0dWFsaXphZG86JywgZXJyb3IubWVzc2FnZSlcbiAgICAgIFxuICAgICAgLy8gVGVudGFyIGRlbGV0YXIgdG9kb3Mgb3MgdXN1w6FyaW9zIHBhcmEgZm9yw6dhciByZWNyaWHDp8Ojb1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIuZGVsZXRlTWFueSh7fSlcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfl5HvuI8gIFVzdcOhcmlvcyBhbnRpZ29zIHJlbW92aWRvcycpXG4gICAgICB9IGNhdGNoIChkZWxldGVFcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygn4oS577iPICBOw6NvIGZvaSBwb3Nzw612ZWwgcmVtb3ZlciB1c3XDoXJpb3MgYW50aWdvcyAobm9ybWFsIHNlIG7Do28gZXhpc3RpcmVtKScpXG4gICAgICB9XG4gICAgICBcbiAgICAgIHVzZXJDb3VudCA9IDBcbiAgICB9XG4gICAgXG4gICAgaWYgKHVzZXJDb3VudCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ/CfmoAgQ3JpYW5kbyB1c3XDoXJpb3MgcGFkcsOjby4uLicpXG4gICAgICBcbiAgICAgIC8vIEhhc2ggcGFyYSBhIHNlbmhhIHBhZHLDo28gXCIxMjM0NTZcIlxuICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCgnMTIzNDU2JywgMTIpXG5cbiAgICAgIC8vIENyaWFyIHVzdcOhcmlvcyBwYWRyw6NvXG4gICAgICBjb25zdCB1c2VycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHVzZXJuYW1lOiAnYWRtaW4nLFxuICAgICAgICAgIGVtYWlsOiAnYWRtaW5Ac2lzdGVtYS5jb20nLFxuICAgICAgICAgIG5hbWU6ICdBZG1pbmlzdHJhZG9yJyxcbiAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgcm9sZTogJ0FETUlOJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHVzZXJuYW1lOiAnZ2VyZW50ZScsXG4gICAgICAgICAgZW1haWw6ICdnZXJlbnRlQHNpc3RlbWEuY29tJyxcbiAgICAgICAgICBuYW1lOiAnR2VyZW50ZScsXG4gICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgICAgIHJvbGU6ICdHRVJFTlRFJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHVzZXJuYW1lOiAnYXRlbmRlbnRlJyxcbiAgICAgICAgICBlbWFpbDogJ2F0ZW5kZW50ZUBzaXN0ZW1hLmNvbScsXG4gICAgICAgICAgbmFtZTogJ0F0ZW5kZW50ZScsXG4gICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgICAgIHJvbGU6ICdBVEVOREVOVEUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdXNlcm5hbWU6ICdjb3ppbmhhJyxcbiAgICAgICAgICBlbWFpbDogJ2NvemluaGFAc2lzdGVtYS5jb20nLFxuICAgICAgICAgIG5hbWU6ICdDb3ppbmhhJyxcbiAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgcm9sZTogJ0NPWklOSEEnLFxuICAgICAgICB9XG4gICAgICBdXG5cbiAgICAgIGZvciAoY29uc3QgdXNlciBvZiB1c2Vycykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB1c2VyXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhg4pyFIFVzdcOhcmlvICR7dXNlci51c2VybmFtZX0gY3JpYWRvYClcbiAgICAgICAgfSBjYXRjaCAoY3JlYXRlRXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhg4pqg77iPICBFcnJvIGFvIGNyaWFyIHVzdcOhcmlvICR7dXNlci51c2VybmFtZX06YCwgY3JlYXRlRXJyb3IubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygn4pyFIFVzdcOhcmlvcyBwYWRyw6NvIGNyaWFkb3MgY29tIHN1Y2Vzc28hJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYOKEue+4jyAgSsOhIGV4aXN0ZW0gJHt1c2VyQ291bnR9IHVzdcOhcmlvcyBubyBiYW5jb2ApXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJvIGFvIGdhcmFudGlyIHVzdcOhcmlvcyBwYWRyw6NvOicsIGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiYmNyeXB0IiwiZW5zdXJlRGVmYXVsdFVzZXJzIiwidXNlckNvdW50IiwidXNlciIsImNvdW50IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImRlbGV0ZU1hbnkiLCJkZWxldGVFcnJvciIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsInVzZXJzIiwidXNlcm5hbWUiLCJlbWFpbCIsIm5hbWUiLCJwYXNzd29yZCIsInJvbGUiLCJjcmVhdGUiLCJkYXRhIiwiY3JlYXRlRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/ensure-users.ts\n");

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