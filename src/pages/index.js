import React from 'react'
import { Link } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import {
  increaseCounter,
  decreaseCounter,
} from '@store/modules/counter/actions'

import Layout from '@components/Layout'
import SEO from '@components/seo'

export default function IndexPage() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>

      <p>Counter: {counter.value}</p>

      <button type="button" onClick={() => dispatch(increaseCounter(1))}>
        Increase value
      </button>

      <button type="button" onClick={() => dispatch(decreaseCounter(1))}>
        Decrease value
      </button>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
