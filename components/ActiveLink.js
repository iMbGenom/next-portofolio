import React, { Children } from 'react'
import { Link } from '../routes'
import { withRouter } from 'next/router'

const ActiveLink = ({children, router, ...props}) => {
  const child = Children.only(children) // kalo lebih dari satu children, akan throw error
  let className = child.props.className || ''

  if (router.asPath === props.route && props.activeClassName) {
    // console.log('asPath', router.asPath)
    // console.log('props.route', props.route)
    // console.log('props.activeClassName', props.activeClassName)
    className = `${className} ${props.activeClassName}`
    // console.log(className)
  }

  delete props.activeClassName

  return <Link {...props}>{React.cloneElement(child, {className, additional: 'some props'})}</Link>
}

export default withRouter(ActiveLink)