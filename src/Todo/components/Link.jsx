// @flow

import * as React from 'react'
import type { Element } from 'react'

export type LinkProps = {
  active: boolean,
  children: React.ChildrenArray<string>,
  onClick: (any) => void
}

const Link = ({ active, children, onClick }: LinkProps): Element<any> => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

export default Link
