function rejectedPromise() {

    return new Promise((_, rejected) => {
        setTimeout(() => {
            try {
                throw new Error('{ error: delayed exception! }')
            } catch (error) {
                rejected(error)
            }
        }, 500)
    });

}

rejectedPromise().catch((err) => {
    console.log(err.message);
    
});