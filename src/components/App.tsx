import { observer } from 'mobx-react'
import * as React from 'react'
import {bridge} from '../helpers/bridge'
import { env } from '../helpers/env'
import { http } from '../helpers/http'

import {Bridge} from '../modules/Bridge'

import { ICLP } from '../interfaces/metrics'
import { SmallButton } from './Button'
import { Container } from './Container'
import { FullWidth } from './FullWidth'
import { Input } from './Input'
import { Label } from './Label'
import { Pane } from './Pane'
import { PaneHeader } from './PaneHeader'
import { PaneRow } from './PaneRow'
import { Title } from './Title'
import { TitleLabel } from './TitleLabel'
import { TokenList } from './TokenList'

@observer
class App extends React.Component<object, object> {
  public state: {
    name: string,
    address: string,
    clps: ICLP[],
    accountImported: boolean,
    wasmLoaded: boolean,
  } = { name: '', address: '', clps: [], accountImported: false, wasmLoaded: false }
  public bridge:Bridge = bridge
  private intervals: NodeJS.Timer[] = []

  public async componentWillMount() {
    this.bridge.open()
    this.getAccount()
    this.loadCLPs()
  }

  public componentWillUnmount() {
    this.intervals.forEach(interval => clearInterval(interval))
  }

  public render() {

    const { accountImported, address, clps, name, wasmLoaded } = this.state

    return (
      <Container>
        <FullWidth>
          <Pane>
            <PaneHeader full={true}>Account</PaneHeader>
            <PaneRow>
              <TitleLabel>
                <Title>Token Owner</Title>
                <Input placeholder="Private Key or Wallet File" />
                <SmallButton disabled={!wasmLoaded}>Upload Account</SmallButton>
              </TitleLabel>
            </PaneRow>
            <PaneRow>
              <TitleLabel>
                <Title>Name</Title>
                <Label>{name}</Label>
              </TitleLabel>
              <TitleLabel>
                <Title>Address</Title>
                <Label>{address}</Label>
              </TitleLabel>
            </PaneRow>
            <PaneRow>
              <TitleLabel>
                <Title>Tokens</Title>
                <TokenList clps={clps}/>
              </TitleLabel>
            </PaneRow>
            <PaneRow>
              {accountImported && <SmallButton>Forget Account</SmallButton>}
            </PaneRow>
          </Pane>
        </FullWidth>
      </Container>
    )
  }

  private getAccount = async () => this.setState({ name: 'My Wallet 2', address: 'tc0c08...'})

  private loadCLPs = async () => {
    let clps
    try {
      clps = await http.get(env.REACT_APP_LCD_API_HOST + `/clps`)
    }
    catch(error) {
      return
    }
    this.setState({ clps })
  }
}

export default App
