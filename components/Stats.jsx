"use client"

import CountUp  from "react-countup"

const stats = [
    {
        num: 2,
        text: "Years of Experience",
        suffix: "+",
    },
    {
        num: 5,
        text: "Projects Completed",
        suffix: "+",
    },
    {
        num: 8,
        text: "Technologies Used",
        suffix: "+",
    },
    {
        num: 850,
        text: "Code Commits",
        suffix: "+",
    },
]

const Stats = () => {
  return (
    <section className="py-6 xl:py-10">
      <div className="section-wrap">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => {
                return (
                    <div className="glass-panel rounded-[1.75rem] px-6 py-6" key={index}>
                        <div className="flex items-end gap-2">
                          <CountUp
                              end={item.num}
                              duration={4}
                              delay={1.2}
                              className="text-4xl font-extrabold text-[var(--accent)] xl:text-5xl"
                          />
                          <span className="pb-1 text-lg font-bold text-[var(--highlight)]">{item.suffix}</span>
                        </div>
                        <p className="mt-3 max-w-[180px] leading-snug text-[var(--muted-text)]">
                          {item.text}
                        </p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Stats
