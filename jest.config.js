const {defaults} = require('jest-config'); //引入jest的預設.
module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    "transform": {
        "^.+\\.js$": "babel-jest", // 用 babel-jest 編譯 .js.
    },
    "moduleNameMapper": {
        "@/(.*)$": "<rootDir>/src/$1" //設定根目錄為src和node_modules
    }, 
    preset: 'ts-jest',
    testEnvironment: 'node',   
};

// setting of babel6.

