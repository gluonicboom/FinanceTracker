import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import FeatureSection from './FeatureSection';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => p + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-900 min-h-screen flex-col items-center justify-center">
      <div className="bg-gray-900">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </nav>

          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img alt="" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" className="h-8 w-auto" />
                </a>
                <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-200">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        {/* Hero — balanced top/bottom padding so it sits flush with FeatureSection */}
        <div className="relative isolate px-6 pt-20 pb-0 lg:px-8">
          <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="mx-auto max-w-2xl pt-16 pb-16 sm:pt-24 sm:pb-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                What is FinanceTracker{' '}
                <Link to="/ReadMore" className="font-semibold text-indigo-400">
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                How will you spend your money life?
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl">
                Create a friendly, flexible plan and spend it well with FinanceTracker.
              </p>

              {/* Animated Log In Button */}
              <div className="mt-10 flex items-center justify-center">
                <div className="relative inline-flex items-center justify-center">
                  <span
                    key={pulse}
                    className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 animate-ping opacity-40"
                  />
                  <Link
                    to="/SignIn"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="relative inline-flex items-center gap-2 rounded-full bg-indigo-600 px-10 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300"
                    style={{
                      transform: hovered ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
                      boxShadow: hovered
                        ? '0 0 30px rgba(99,102,241,0.8), 0 8px 24px rgba(0,0,0,0.4)'
                        : '0 4px 14px rgba(99,102,241,0.4)',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12H9m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeatureSection />
    </div>
  )
}