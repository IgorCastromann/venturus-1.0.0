import React from 'react'
import Header from '../../components/Header'
import Teams from './Teams'
import Top5 from './Top5'
import MostLeast from './MostLeast'

import Footer from '../../components/Footer'


const Dashboard = () => {
    return(
        <>
            <Header />
                <section className="body">
                    <Teams />
                    <section className="bodyRight">
                        <Top5 />
                        <MostLeast />
                    </section>
                </section>
            <Footer  />
        </>
    )
}

export default Dashboard