const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to', 'media2.dev.to', 'dev-to-uploads.s3.amazonaws.com']
  }
}