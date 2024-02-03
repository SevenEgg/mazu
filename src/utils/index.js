import superagent from 'superagent';

// console 打印日志
export const logger = (...args) => {
    let arg = args;
    const message = ["%c[ZhiXue_Tools]", "color:blue"];

    if (Array.isArray(args)) {
        try {
            message[0] = `${message[0]} %c${args[0]}`;
            message.push('color:red;');
            arg = args.slice(1);
        } catch (error) {
            console.log(error);
        }

        console.log(...message, ...arg);
    }
}

export const request = async ({ url, method, req = {}, files = [] }) => {
    logger("request URL:",url);
    logger("request QS:",JSON.stringify(req));
    try {
        let res;
        switch (method) {
            case "FORM":
                const fn = superagent.post(url).field(req).accept("json");
                if (files && files[0]) {
                    files.forEach(({ name: filename, file: filepath }) => {
                        fn.attach(filename, filepath);
                    })
                }
                res = await fn;
                break;
            case "JSON":
                res = await superagent.post(url).send(req).accept("json");
                break;
            default:
                res = await superagent.get(url).query(req).accept('json');
                break;
        }

        // logger(JSON.stringify(res.body));
        const {
            data,
            code
        } = res.body;

        if (code !== 200) {
            throw new Error(data.msg);
        }

        return {
            data,
            success: true
        }

    } catch (error) {
        throw new Error(error.message);
    }


}