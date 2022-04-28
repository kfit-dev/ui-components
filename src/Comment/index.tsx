import * as React from 'react'
import { Comment as AntComment, CommentProps as AntCommentProps } from 'antd'

import './style.css'

export type CommentProps = AntCommentProps
export const Comment: React.FC<CommentProps> = props => <AntComment {...props} />

Comment.defaultProps = {}

export default Comment
