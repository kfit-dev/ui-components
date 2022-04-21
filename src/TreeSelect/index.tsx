import * as React from 'react'
import {
  TreeSelect as AntTreeSelect,
  TreeSelectProps as AntTreeSelectProps,
  TreeNodeProps as AntTreeNodeProps
} from 'antd'
import { CaretDown } from 'phosphor-react'
import './style.css'

export type TreeSelectProps = AntTreeSelectProps & {
  children?: React.ReactNode
}
export type TreeSelectTreeNodeProps = AntTreeNodeProps

const parentNodeClassname = 'ant-tree-select-parent-node'
const expandIconClassname = 'ant-select-tree-switcher'

export const recursiveTreeNodes: Function = (tree: TreeSelectTreeNodeProps[], parentKey?: string) => {
  // base case to check if array has any objects to be traverse down
  if (tree.length === 0) {
    return tree
  } else {
    return tree.map((item, index) => {
      // to set individual node keys for treeData to determine relationship
      // of parentNodes and childrenNodes
      const itemKey = parentKey ? `${parentKey}-${index}` : `${index}`
      item.value = itemKey

      // if no children, return as it is
      if (!item.children) {
        return item
      }

      // else return children and call same function
      else {
        item.selectable = false
        item.className = parentNodeClassname

        return {
          ...item,
          children: recursiveTreeNodes(item.children as TreeSelectTreeNodeProps[], itemKey)
        }
      }
    })
  }
}

export const TreeSelectTreeNode: React.FC<TreeSelectTreeNodeProps & {
  value: string
}> = props => {
  return <AntTreeSelect.TreeNode {...props} value={props.value} />
}

const onClickExpandTree = (event: React.MouseEvent) => {
  const target = event.target as Element
  const parentNode = target.parentNode as HTMLElement

  if (parentNode.className.includes(parentNodeClassname)) {
    event.preventDefault()
    const expandIconElement: any = Array.from(parentNode.childNodes).find((item: HTMLElement) =>
      item.className.includes(expandIconClassname)
    )
    if (expandIconElement) {
      expandIconElement.click()
    }
  }
}

const TreeSelect: React.FC<TreeSelectProps> = props => {
  React.useEffect(() => {
    const dropdownContainer = document.querySelector('body')
    if (dropdownContainer) dropdownContainer.addEventListener('click', onClickExpandTree as () => void)
    return () => {
      if (dropdownContainer) dropdownContainer.removeEventListener('click', onClickExpandTree as () => void)
    }
  }, [onClickExpandTree])

  return <AntTreeSelect {...props} treeData={recursiveTreeNodes(props.treeData)} />
}

TreeSelect.defaultProps = {
  switcherIcon: <CaretDown className="rotate-caret" size={16} weight="light" />,
  suffixIcon: <CaretDown className="rotate-caret" size={16} weight="light" />,
  style: { maxWidth: '320px' },
  dropdownStyle: { maxHeight: 400, overflow: 'auto' },
  placeholder: 'Please select'
}

export default TreeSelect
