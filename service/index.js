const Comment = require('./schemas/comment')
const Reply = require('./schemas/reply')
const Image = require('./schemas/image')
const File = require('./schemas/file')

const getAllcomments = async () => {
    return Comment.find()
}

const getAllreplies = async () => {
    return Reply.find()
}

const getAllimages = async () => {
    return Image.find()
}

const createNewComment = async (comment) => {
    return Comment.create(comment)
}

const createNewReply = async (reply) => {
    return Reply.create(reply)
}

module.exports = {
    getAllcomments,
    getAllimages,
    getAllreplies,
    createNewComment,
    createNewReply
}