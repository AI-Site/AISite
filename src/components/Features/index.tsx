import React from "react"

import clsx from "clsx"

import Headline from "@site/src/components/Headline"

import styles from "./styles.module.scss"

interface Feature {
  title: string
  description: string
}

const data: Feature[] = [
  {
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Feature 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Feature 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
]

const Feature = ({ title, description }: Feature) => {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <Headline
          category="Features"
          title="AISite holds a suite of information that will help you get started with AI"
          offset={1}
        />

        <div className="row">
          {data.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
