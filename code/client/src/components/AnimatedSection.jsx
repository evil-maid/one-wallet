import React from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'
import { Card } from 'antd'

const Section = styled(Card)`
  padding: 32px;
  position: absolute;
`

const defaultStyle = {
  transition: 'opacity 300ms ease-in-out',
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1, zIndex: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, zIndex: 0 },
}

const AnimatedSection = ({ show = true, children, style, ...params }) => (
  <Transition in={show} timeout={300}>
    {state => (
      <Section style={{ ...defaultStyle, ...transitionStyles[state], ...style }} {...params}>
        {children}
      </Section>
    )}
  </Transition>)

export default AnimatedSection