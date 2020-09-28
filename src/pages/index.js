import React from "react"
import { Link } from "gatsby"

import styles from "./styles.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import img_1 from "./GitHub-Mark-64px.png"
import img_2 from "./61109.png"
import img_3 from "./8807.png"


const IndexPage = () => (

    <div class={"card"}>
    <div>
    <SEO title="Home" />
    <h1>Abu bakar Daud</h1>
    <p class={"main_line"}>Software intern at <a href="http://loeysdietzcanada.org">Loeys Dietz Canada</a>, currently interested in data engineering</p>
    <p class={"degree"}>HONORS MATH & COMPUTER SCIENCE AT McGill UNIVERSITY </p>
    <div class={"img_container"}>
    <a href="https://github.com/abubakardaud"> <img src={img_1} alt="github"></img></a>
    <a href="https://www.linkedin.com/in/abu-bakar-daud-5356631b8/"> <img src={img_2} alt="linkedin"></img></a>
    <a href = "mailto: abubakar.daud@mail.mcgill.ca"><img src={img_3} alt="email"></img></a></div>
    </div>
    </div>

)

export default IndexPage
