import * as React from 'react'
import styled from 'styled-components'

import { ICLP } from '../interfaces/metrics'
import { Pane } from './Pane'
import { PaneHeader } from './PaneHeader'
import { TokenList } from './TokenList'

const Container = styled.div`
  max-height: 280px;
  overflow-y: scroll;
`

export const Tokens = ({ clps }: { clps: ICLP[] }) => <Pane>
    <PaneHeader>Tokens ({clps.length + 1})</PaneHeader>
    <Container>
        <Pane>
            <TokenList clps={clps} />
        </Pane>
    </Container>
</Pane>

