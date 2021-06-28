import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import Paths from './constants/paths'
import { Layout, Row, Spin } from 'antd'
import SiderMenu from './components/SiderMenu'
import WalletHeader from './components/WalletHeader'
import CreatePage from './pages/Create'
import ListPage from './pages/List'
import RestorePage from './pages/Restore'
import ShowPage from './pages/Show'
import { walletActions } from './state/modules/wallet'
import config from './config'

const LocalRoutes = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu/>
      <Layout>
        <WalletHeader />
        <Layout.Content style={{ padding: 32 }}>
          <Switch>
            <Route path={Paths.create} component={CreatePage} />
            <Route path={Paths.wallets} component={ListPage} />
            <Route path={Paths.restore} component={RestorePage} />
            <Route path={Paths.show} component={ShowPage} />
            <Route component={CreatePage} />
          </Switch>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

const Routes = () => {
  const dispatch = useDispatch()
  const [rehydrated, setRehydrated] = useState(false)
  useEffect(() => {
    const store = require('./state/store')
    dispatch(walletActions.fetchPrice())
    setInterval(() => {
      dispatch(walletActions.fetchPrice())
    }, config.priceRefreshInterval)
    persistStore(store.default, null, () => {
      setRehydrated(true)
    })
  }, [dispatch])

  if (!rehydrated) {
    return (
      <Layout>
        <Layout.Content>
          <Row type='flex' justify='center' align='middle' style={{ minHeight: '100vh' }}>
            <Spin size='large' />
          </Row>
        </Layout.Content>
      </Layout>
    )
  }

  return (
    <Switch>
      <Route>
        <LocalRoutes />
      </Route>
    </Switch>
  )
}

export default Routes
