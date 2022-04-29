import React, { ChangeEventHandler, ReactNode } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Form } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import Avatar from '../../Avatar'
import Button from '../../Button'
import List from '../../List'
import { default as Comment, CommentProps } from '../index'

export default {
  title: 'Comment',
  component: Comment
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args: CommentProps) => <Comment {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Comment',
  author: 'Han Solo • A few seconds ago',
  avatar: <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />,
  content: (
    <p>
      We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),
      to help people create their product prototypes beautifully and efficiently.
    </p>
  )
}

type CommentEditorProps = {
  avatar: React.ReactElement
  onCancel?: () => void
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  onSubmit: () => void
  submitting: boolean
  value: string
}

type RecursiveCommentsProps = CommentProps &
  CommentEditorProps & {
    key: string
    parentkey?: string
    replyToID: string
    setReplyToID: any
  }

type CommentListComment = {
  key: string
  author: string
  avatar: React.ReactElement
  children?: CommentListComment[]
  content: ReactNode
  datetime: string
}

type CommentListProps = CommentEditorProps & {
  comments: CommentListComment[]
  replyToID: string
  setReplyToID: (e: string) => void
}

const CommentEditor: React.FC<CommentEditorProps> = props => (
  <Comment
    avatar={props.avatar}
    content={
      <>
        <Form.Item>
          <TextArea rows={4} onChange={props.onChange} value={props.value} />
        </Form.Item>
        <Form.Item>
          <Button loading={props.submitting} onClick={props.onSubmit} type="primary">
            Submit
          </Button>
          {props.onCancel && (
            <Button onClick={props.onCancel} type="text">
              Cancel
            </Button>
          )}
        </Form.Item>
      </>
    }
  />
)

const RecursiveComments: React.FC<RecursiveCommentsProps> = props => {
  const { parentkey, replyToID, setReplyToID, submitting, ...restProps } = props
  // const [value, setValue] = React.useState('')
  const children = props.children as []
  const actions = parentkey && [
    <span
      key="comment-nested-reply-to"
      onClick={() => {
        if (setReplyToID) {
          setReplyToID(parentkey)
        }
      }}
    >
      Reply to
    </span>
  ]

  return (
    <Comment {...restProps} actions={actions || []} content={<>{props.content}</>}>
      {replyToID === parentkey && (
        <div>
          {/* attach logged in user details here */}
          <CommentEditor
            avatar={<Avatar>AL</Avatar>}
            onChange={props.onChange}
            onSubmit={props.onSubmit}
            onCancel={props.onCancel}
            submitting={submitting}
            value={props.value}
          />
        </div>
      )}
      {children &&
        children.map((item: RecursiveCommentsProps) => {
          return (
            <RecursiveComments
              {...item}
              author={`${item.author} • ${item.datetime}`}
              datetime={``}
              key={item.key}
              parentkey={item.key}
              replyToID={replyToID}
              setReplyToID={setReplyToID}
              content={<>{item.content}</>}
              onSubmit={props.onSubmit}
              onCancel={props.onCancel}
              submitting={submitting}
            />
          )
        })}
    </Comment>
  )
}

const CommentList: React.FC<CommentListProps> = props => {
  return (
    <>
      <List
        bordered={false}
        dataSource={props.comments}
        header={`${props.comments.length} ${props.comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={renderProps => {
          // first level node always appear here

          return (
            <>
              <RecursiveComments
                {...renderProps}
                author={`${renderProps.author} • ${renderProps.datetime}`}
                datetime={``}
                setReplyToID={props.setReplyToID}
                replyToID={props.replyToID}
                parentkey={renderProps.key}
                avatar={renderProps.avatar}
                onChange={props.onChange}
                onCancel={props.onCancel}
                onSubmit={props.onSubmit}
                submitting={props.submitting}
                value={props.value}
              />
            </>
          )
        }}
      />
      {/* attach logged in user avatar here */}
      {!props.replyToID && (
        <CommentEditor
          avatar={<Avatar>AL</Avatar>}
          onChange={props.onChange}
          onSubmit={props.onSubmit}
          submitting={props.submitting}
          value={props.value}
        />
      )}
    </>
  )
}

export const CommentsSection: React.FC = () => {
  const initialValues = {
    comments: [
      {
        key: '1',
        author: 'Katelyn',
        avatar: <Avatar>KS</Avatar>,
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        datetime: 'A few seconds ago',
        children: [
          {
            key: '1-1',
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            datetime: 'A few seconds ago',
            children: [
              {
                key: '1-1-1',
                author: 'Katelyn',
                avatar: <Avatar>KS</Avatar>,
                content:
                  'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                datetime: 'A few seconds ago',
                children: [
                  {
                    key: '1-1-1-1',
                    author: 'Han Solo',
                    avatar: 'https://joeschmoe.io/api/v1/random',
                    content:
                      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    datetime: 'A few seconds ago'
                  }
                ]
              },
              {
                key: '1-1-2',
                author: 'Han Solo',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content:
                  'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                datetime: 'A few seconds ago'
              }
            ]
          },
          {
            key: '1-2',
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            datetime: 'A few seconds ago'
          }
        ]
      },
      {
        key: '2',
        author: 'Han Solo',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        datetime: 'A few seconds ago'
      }
    ],
    submitting: false,
    value: '',
    replyToId: undefined
  }

  const reducer = (state: any, action: { type: any; payload?: any }): any => {
    switch (action.type) {
      case 'handleSubmit':
        return {
          ...state,
          ...action.payload
        }
      case 'setValue':
        return {
          ...state,
          value: action.payload
        }
      case 'setIsSubmit':
        return {
          ...state,
          submitting: action.payload
        }
      case 'setReplyToID':
        return {
          ...state,
          replyToId: action.payload
        }
    }
  }

  const [{ comments, submitting, value, replyToId }, dispatch] = React.useReducer(reducer, initialValues)

  const handleChange = (e: any) => {
    dispatch({ type: 'setValue', payload: e.target.value })
  }

  const setReplyToID = (e: string) => {
    dispatch({ type: 'setReplyToID', payload: e })
  }

  const handleSubmit = (e?: any) => {
    if (!value) {
      return
    }
    dispatch({ type: 'setIsSubmit', payload: true })
    const level = replyToId && replyToId.split('-')

    const attachCommentToParent = (commentArray: CommentListComment[], commentLevel?: number) => {
      const currentLevel = commentLevel || 0
      if (replyToId) {
        const newComments = [...commentArray]
        return newComments.map(item => {
          if (item.key.split('-')[currentLevel] === level[currentLevel]) {
            if (item.key === replyToId) {
              if (!item.children) {
                item.children = []
              }
              item.children.push({
                key: `${item.key}-${item.children.length + 1}`,
                author: 'Alan Lai',
                avatar: <Avatar>AL</Avatar>,
                content: value,
                datetime: 'A few seconds ago'
              })
              return item
            } else {
              return { ...item, children: attachCommentToParent(item.children, currentLevel + 1) }
            }
          } else {
            return item
          }
        })
      } else {
        return [
          ...comments,
          {
            key: `${comments.length + 1}`,
            author: 'Alan Lai',
            avatar: <Avatar>AL</Avatar>,
            content: value,
            datetime: 'A few seconds ago'
          }
        ]
      }
    }

    setTimeout(() => {
      dispatch({
        type: 'handleSubmit',
        payload: {
          submitting: false,
          value: '',
          comments: attachCommentToParent(comments)
        }
      })
      setReplyToID(undefined)
    }, 1000)
  }

  return (
    <>
      {comments.length > 0 && (
        <CommentList
          comments={comments}
          replyToID={replyToId}
          setReplyToID={(e: any) => setReplyToID(e)}
          avatar={<Avatar>KS</Avatar>}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={() => setReplyToID(undefined)}
          submitting={submitting}
          value={value}
        />
      )}
    </>
  )
}
