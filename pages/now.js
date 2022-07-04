import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm working on now"
        url={siteMetadata.url}
      />
      <div>
        <div className="my-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Where am I and what am I doing?
          </h3>
          <div className="mt-3 mb-4 text-sm">Last updated: 4 July 2022</div>
        </div>
        {/* Misc */}
        <div>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Location</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">Austin, Texas</dd>
            </div>
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Professional title</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">Sr Software Engineer</dd>
            </div>
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Reading 📚</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">Project Hail Mary</dd>
            </div>
          </dl>
        </div>
        {/* Work */}
        <div className="pb-4">
          <span>
            I work as a software engineer at{' '}
            <Link
              href={'https://abg.com'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              ABG{' '}
            </Link>
          </span>
          <span>I'm mostly using technology such as React, Tailwind, Vercel, etc.</span>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6 space-y-4">
          <p>
            I've been slowly building this website, trying to share interesting things with anyone
            who wants to read it.{' '}
            <Link
              href={'https://www.swyx.io/learn-in-public'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              This
            </Link>{' '}
            article is a great reason to start your blog.
          </p>
          <p>I recently started to quantify my life. Collect various data about my daily life.</p>
        </div>
        <div className="mt-3 text-sm">
          For more examples of folks with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
          >
            nownownow.com
          </Link>
        </div>
      </div>
    </>
  )
}
