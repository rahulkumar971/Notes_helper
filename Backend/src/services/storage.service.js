const {ImageKit} = require("@imagekit/nodejs")


const ImageKitClient = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(file,title){
    
    const result = await ImageKitClient.files.upload({
        file,
         fileName: `${title}_${Date.now()}`,
        folder :"Notes/degree/bca"
    })
    return result
}
module.exports = {uploadFile};