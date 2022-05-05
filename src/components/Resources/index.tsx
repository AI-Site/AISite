import React, { ReactNode } from "react"

import clsx from "clsx"
import { FaQuestion } from "react-icons/fa"
import { FiBook, FiEdit3, FiGithub } from "react-icons/fi"
import { ImLab} from "react-icons/im"

import Link from "@docusaurus/Link"
import Headline from "@site/src/components/Headline"

import styles from "./styles.module.scss"

interface Resource {
  href: string
  icon: ReactNode
  title?: string
  description: string
}

const size = 48
const data: Resource[] = [
  {
    href: "docs/faq",
    icon: <FaQuestion size={size} />,
    description: "Frequently Asked Questions",
  },
  {
    href: "Demos",
    icon: <ImLab size={size} />,
    description: "Learn more about each demo offered on this site",
  },
  {
    href: "docs",
    icon: <FiBook size={size} />,
    title: "Learn",
    description:
      "Explore the history of AI, various AI techniques and more.",
  },
  {
    href: "https://github.com/A-Waked/AIDemos",
    icon: <FiGithub size={size} />,
    title: "Contribute",
    description:
      "The field of AI is constantly evolving. Help us add more information to the site by making your own contributions!",
  },
]

const Resource = ({ href, icon, title, description }: Resource) => {
  return (
    <Link className={clsx("card", styles.card)} to={href}>
      <div className="card__header">
        <div className="card__icon">{icon}</div>
        {title && <h3>{title}</h3>}
      </div>

      <div className="card__body">
        <p>{description}</p>
      </div>
    </Link>
  )
}

const Resources = () => {
  return (
    <section id="resouces" className={styles.resources}>
      <div className="container">
        <Headline
          category="Resources"
          title="Browse our resources to get started with AISite"
          offset={1}
        />

        <div className="row">
          {data[0] && data[1] && (
            <div className={clsx("col", styles.resource)}>
              <Resource {...data[0]} />
              <Resource {...data[1]} />
            </div>
          )}

          {data[2] && (
            <div className={clsx("col", styles.resource)}>
              <Resource {...data[2]} />
            </div>
          )}

          {data[3] && (
            <div className={clsx("col", styles.resource)}>
              <Resource {...data[3]} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Resources
