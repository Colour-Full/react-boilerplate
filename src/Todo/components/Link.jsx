// @flow

import React, {type Element, type ChildrenArray} from 'react'
import Button from '@atlaskit/button'

export type LinkProps = {
  active: boolean,
  children: ChildrenArray<string>,
  onClick: (any) => void
}

const Link = ({ active, children, onClick }: LinkProps): Element<any> => (
  <Button
    onClick={onClick}
    isSelected={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </Button>
)

export default Link
