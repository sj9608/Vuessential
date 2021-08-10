module.exports = {
    css: {
        sourceMap: true,
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/styles/_variables.scss";
                    @import "@/assets/styles/_mixins.scss";
                    `
            }
        }
    }
}