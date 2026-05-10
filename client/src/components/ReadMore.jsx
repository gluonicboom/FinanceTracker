const features = [
  {
    name: 'Track Every Rupee',
    description:
      'Log your daily income and expenses in seconds. No complicated setup — just open the app and record what you spent. Small entries add up to big clarity.',
    emoji: '📝',
  },
  {
    name: 'Understand Your Habits',
    description:
      'See patterns in your spending over time. Are you overspending on food? Subscriptions creeping up? FinanceTracker makes it obvious so you can fix it.',
    emoji: '📊',
  },
  {
    name: 'Set Simple Goals',
    description:
      'Want to save ₹5000 this month? Set it, track it, hit it. No complex budgeting systems — just a clear target and your daily progress toward it.',
    emoji: '🎯',
  },
  {
    name: 'Stay Stress-Free',
    description:
      'Financial anxiety comes from not knowing. When you track, you always know where you stand. That peace of mind is worth more than any feature.',
    emoji: '😌',
  },
]

export default function ReadMore() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-400">Save More</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Everything you need to know about FinanceTracker
          </p>
          <p className="mt-6 text-lg text-gray-300">
            FinanceTracker is a dead-simple tool to log your money, understand your habits, and feel in control of your finances — no spreadsheets, no stress.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500 text-xl">
                    {feature.emoji}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}