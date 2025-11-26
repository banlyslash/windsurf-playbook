import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./quiz.module.css";

type QuizOption = {
  difficulty: string;
  link: string;
  questions: number;
};

type QuizCategory = {
  title: string;
  description: string;
  icon: string;
  options: QuizOption[];
};

const QuizCategories: QuizCategory[] = [
  {
    title: "Learning Quiz",
    description: "Practice and learn at your own pace with instant feedback and explanations.",
    icon: "📚",
    options: [
      {
        difficulty: "Basic",
        link: "/challenges/basic-concepts",
        questions: 36,
      },
      {
        difficulty: "Advanced",
        link: "/challenges/advanced-scenarios",
        questions: 36,
      },
    ],
  },
  {
    title: "Assessment",
    description: "Formal assessment with personalized results. Your name will be recorded.",
    icon: "🏆",
    options: [
      {
        difficulty: "Basic",
        link: "/assessment/basic-concepts",
        questions: 36,
      },
      {
        difficulty: "Advanced",
        link: "/assessment/advanced-scenarios",
        questions: 36,
      },
    ],
  },
];

function QuizCategoryCard({ title, description, icon, options }: QuizCategory) {
  return (
    <div className={styles.categoryCard}>
      <div className="card">
        <div className="card__header">
          <div className={styles.cardIcon}>{icon}</div>
          <div className={styles.titleRow}>
            <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
            <div className={styles.questionPill}>{options[0].questions} Questions</div>
          </div>
          <p className={styles.cardDescription}>{description}</p>
        </div>
        <div className="card__body">
          <div className={styles.optionsContainer}>
            {options.map((option, idx) => (
              <Link
                key={idx}
                className={clsx(
                  "button",
                  option.difficulty === "Basic" ? "button--outline" : "button--primary",
                  option.difficulty === "Basic" ? styles.optionButtonOutline : styles.optionButton
                )}
                to={option.link}
              >
                <span className={styles.difficultyLabel}>{option.difficulty}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="hero__title-container">
          <img
            className="hero__logo"
            src="img/windsurf-white-wordmark.svg"
            alt="Windsurf"
          />
          <Heading as="h1" className="hero__title">
            Quiz Center
          </Heading>
        </div>
        <p className="hero__subtitle">
          Test your Windsurf knowledge with interactive quizzes and assessments
        </p>
      </div>
    </header>
  );
}

export default function Quiz(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Quiz Center"
      description="Test your Windsurf knowledge with interactive quizzes and formal assessments. Practice with learning quizzes or take assessments for personalized results."
      wrapperClassName={styles.quizPageWrapper}
    >
      <QuizHeader />
      <main className={styles.quizMain}>
        <section className={styles.quizSection}>
          <div className={styles.centeredContainer}>
            <div className={styles.cardsRow}>
              {QuizCategories.map((category, idx) => (
                <QuizCategoryCard key={idx} {...category} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
