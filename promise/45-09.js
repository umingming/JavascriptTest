try {
    setTimeout(() => {
        throw new Error('An error occurred');
    }, 1000);
} catch (e) {
    console.log("error", e);
}