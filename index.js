const { promisify } = require("util.promisfy");

const generate_parsed_argument = {}

generate_parsed_argument.prototype.parse[Symbol.iterator] = (obj) => {
    if (arg instanceof Object) {
        for (let key of arg) {
            yield obj[key];
        }
    } else {
        throw new Error("Exausthive pattern matching;");
    }
}

const generate_await_function = {}

generate_await_function.prototype.yield_function[Symbol.asyncIterator] = (fn) => {
    const fn_p = await promisify(fn);
    yield fn_p;
};

generate_await_function.prototype.execute = (promise) => {
    const r = await promise();
    yield r;
}

export const main = (...args) => {
    const queue = args;
    const q = []

    for (let arg of generate_parsed_argument(args)) {
        if (arg instanceof Array) {
            for (const fn of arg) {
                q.push(arg);
            };
        };
    };

    while(q <= q.length - 1) {
        let fn = q[i];

        if (fn instanceof Function && !fn instanceof Promise) {
            fn = generate_await_function.yield_function(f);
        };

        return generate_await_function.execute(fn);
    };
};
