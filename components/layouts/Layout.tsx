import { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
    children: ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Head>

            </Head>

            <nav>
                <Navbar />
            </nav>

            <main style={{ padding: '20px 50px'}}>
                { children }
            </main>
        </>
    )
}
