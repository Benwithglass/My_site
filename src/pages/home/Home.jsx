// eslint-disable-next-line no-unused-vars
import React from 'react'
import Layout from '../../components/layout/Layout'
// import Hero from '../../components/hero/Hero'
// import Story from '../../components/story/Story'
import StarProject from '../../components/starProject/StarProject'
import SubProject from '../../components/subProject/SubProject'
import SvgDraw from '../../components/svgDraw/SvgDraw'
// import Contact from '../../components/contact/Contact'

function Home() {
  return (
    <Layout>
      {/* <Hero/> */}
      {/* <Story/> */}
      <StarProject/>
      <SubProject/>
      {/* <Contact/> */}
      <SvgDraw/>
    </Layout>
  )
}

export default Home