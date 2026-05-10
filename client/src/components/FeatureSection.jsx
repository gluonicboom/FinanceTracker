const benefits = [
  {
    title: 'See Where Your Money Really Goes',
    description:
      'Most people underestimate their spending by 30–40%. Writing down expenses — even in a simple tracker — forces honest awareness. You stop guessing and start knowing.',
    emoji: '👁️',
  },
  {
    title: 'Break the Impulse Spending Cycle',
    description:
      'Psychology shows that the act of recording a purchase creates a small "pain of paying" moment. This natural friction reduces impulsive buys and builds mindful habits over time.',
    emoji: '🧠',
  },
  {
    title: 'Reduce Financial Anxiety',
    description:
      'Money stress often comes from uncertainty, not actual shortage. Tracking gives you a clear picture, and clarity is calming. People who track report feeling more in control, even before their situation improves.',
    emoji: '😌',
  },
  {
    title: 'Build Goals That Actually Stick',
    description:
      'Saving for something specific — a trip, a laptop, an emergency fund — becomes measurable when you track. Small, visible progress is one of the strongest motivators in behavioral science.',
    emoji: '🎯',
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-base font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Why it matters
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            The simple habit that changes everything
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            You don't need a financial advisor or a complex spreadsheet.
            You just need to know where your money goes. That one habit rewires how you think about spending.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-gray-800/50 border border-white/5 p-8 hover:bg-gray-800 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{benefit.emoji}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 mx-auto max-w-3xl text-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 px-8 py-12">
          <p className="text-2xl font-semibold text-white mb-4">
            "A budget is telling your money where to go instead of wondering where it went."
          </p>
          <p className="text-gray-400">— Dave Ramsey</p>
          <p className="mt-6 text-gray-400 text-base">
            FinanceTracker is a simple, no-fuss way to log your income and expenses daily.
            No complex categories. No overwhelming dashboards. Just clarity.
          </p>
        </div>

      </div>
    </div>
  )
}