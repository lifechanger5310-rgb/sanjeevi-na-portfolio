"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import { skills } from "@/data/content";

export default function Skills() {
  const reduce = useReducedMotion();
  return (
    <Section id="skills">
      <SectionHeading id="skills-title" kicker="Skills" title="Tools I use" />
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="mb-3 text-base font-semibold text-text">{g.group}</h3>
            <motion.ul
              className="flex flex-wrap gap-2"
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
            >
              {g.items.map((s) => (
                <motion.li
                  key={s}
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
                >
                  <Tag>{s}</Tag>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
