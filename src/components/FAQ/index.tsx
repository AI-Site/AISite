import React from "react"
import { ReactElement } from "react"

import Link from "@docusaurus/Link"

import styles from "./styles.module.scss"

interface Question {
  title: string
  description: ReactElement
}

const data: Question[] = [
  {
    title: "What is AISite?",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </>
    ),
  },
  {
    title: "What is included?",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </>
    ),
  },
  {
    title: "Where can I learn more?",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </>
    ),
    /** 
        * look at our <Link to="docs/policies/terms">terms of service</Link> and{" "}
        * <Link to="docs/policies/privacy">privacy policy</Link>.
    */
  },
  {
    title: "Can I contribute?",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </>
    ),
  },
]

const Question = ({ title, description }: Question) => {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data[0] && <Question {...data[0]} />}
            {data[1] && <Question {...data[1]} />}
          </div>

          <div className="col col--6">
            {data[2] && <Question {...data[2]} />}
            {data[3] && <Question {...data[3]} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
