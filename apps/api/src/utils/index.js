const Stream = require('stream')
function bufferToStream(buffer) {
    const readable = new Stream.Readable({
        read:function(){
            this.push(buffer)
            this.push(null)
        }
    })
    return readable
    
}

module.exports = {
    bufferToStream
}