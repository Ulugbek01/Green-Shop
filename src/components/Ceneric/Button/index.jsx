import React from 'react'
import { Container } from './style'

const Button = ({
    width,
    mt,
    mr,
    mb,
    ml,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    fw,
    children,
    onClick,
    className
}) => {
  return (
    <Container 
        width = {width}
        mt = {mt}
        mr = {mr}
        mb = {mb}
        ml = {ml}
        pt = {pt}
        pr = {pr}
        pb = {pb}
        pl = {pl}
        fw = {fw}
        px = {px}
        py = {py}
        onClick = {onClick}
        className = {className}
    >{children}</Container>
  )
}

export default Button