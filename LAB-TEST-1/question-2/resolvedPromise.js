function resolvedPromise() {

    return new Promise((resolve, _) => {
        setTimeout(() => {
            let success = { 'message': 'delay success!' }
            resolve(success);
        }, 500)

    });
}
resolvedPromise().then(response => console.log(response));